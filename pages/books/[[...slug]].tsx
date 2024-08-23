import { Flex, Heading, Image, Stack, VStack, Text, Divider, Link, Box } from "@chakra-ui/react";
import { GetStaticPropsContext, NextPage } from "next";
import Layout from "../../components/layout";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Book, getAllBooks, getAllSlugs, getBook } from "../../lib/books";
import { Bookshelf } from "../../components/bookshelf";
import { NextSeo } from "next-seo";
import { ReactElement, useEffect, useState } from "react";

interface BooksProps {
  books: Book[];
  book?: Book & { content: MDXRemoteSerializeResult };
}

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const BookDetails: React.FC<{ book: Book & { content: MDXRemoteSerializeResult } }> = ({ book }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <>
      <NextSeo
        title={book.title}
        description={`By: ${book.author} - Read: ${book.date} - Rating: ${book.rating}/10`}
        openGraph={{
          title: book.title,
          description: `By: ${book.author} - Read: ${book.date} - Rating: ${book.rating}/10`,
        }}
      />
      <Stack spacing={6}>
        <VStack align="flex-start" spacing={2}>
          <Heading size="xl">{book.title}</Heading>
          <Text fontSize="xl" fontWeight="bold" color="gray.600">
            By: {book.author}
          </Text>
          <Text color="gray.500">
            Read: {book.date} • Rating: {book.rating}/10
          </Text>
        </VStack>
        <Image
          src={book.coverImage}
          alt={book.title}
          maxHeight="400px"
          objectFit="contain"
        />
        <Prose>
          <MDXRemote {...book.content} />
        </Prose>
      </Stack>
    </>
  );
};

const BookList: React.FC<{ books: Book[] }> = ({ books }) => (
  <>
    <NextSeo title="Books | Iver Finne" />
    <Stack spacing={8}>
      {books
        .sort((a, b) => b.rating - a.rating)
        .map((book) => (
          <Box key={book.title} scrollMarginTop={20}>
            <Flex direction={{ base: "column", md: "row" }} align="flex-start" gap={6}>
              <Image
                border="1px solid"
                borderColor="gray.200"
                src={book.coverImage}
                alt={book.title}
                height={{ base: "200px", md: "250px" }}
                objectFit="contain"
              />
              <VStack align="flex-start" flexGrow={1} spacing={3}>
                <Link href={`/books/${book.slug.replace(/^\/books\//, '')}`}>
                  <Heading size="lg">{book.title}</Heading>
                </Link>
                <Text fontSize="lg" fontWeight="medium">
                  {book.author}
                </Text>
                <Text color="gray.600">
                  Read: {book.date} • Rating: {book.rating}/10
                </Text>
                <Text>{book.summary}</Text>
              </VStack>
            </Flex>
            <Divider mt={8} />
          </Box>
        ))}
    </Stack>
  </>
);

const Books: NextPageWithLayout<BooksProps> = ({ books, book }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return book ? <BookDetails book={book} /> : <BookList books={books} />;
};

Books.getLayout = (page: ReactElement) => (
  <Layout>
    <Flex direction="column" gap={8}>
      <Bookshelf books={(page.props as BooksProps).books} />
      <Divider />
      {page}
    </Flex>
  </Layout>
);

export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths: [{ params: { slug: [] } }, ...paths], fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const books = getAllBooks();
  if (!params?.slug || params.slug.length === 0) {
    return { props: { books } };
  }
  if (params.slug.length > 1) {
    return { redirect: { destination: "/books", permanent: false } };
  }
  const book = await getBook(params.slug[0]);
  if (!book) {
    return { redirect: { destination: "/books", permanent: false } };
  }
  return { props: { books, book } };
}

export default Books;