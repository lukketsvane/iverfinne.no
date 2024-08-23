import os

def read_file_contents(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def write_code_contents(output_file):
    root_dir = r'c:\Users\Shadow\Documents\GitHub\iverfinne.no\content'
    files_of_interest = [
        'books/a-thousand-brains.mdx',
        'books/antkind.mdx',
        'books/children-of-time.mdx',
        'books/empire-of-things.mdx',
        'books/index.json',
        'books/three-body-problem.mdx',
        'projects/coral.mdx',
        'projects/dongjin.mdx',
        'projects/external.json',
        'projects/index.json',
        'projects/jobbi.mdx',
        'projects/storygen.mdx',
        'projects/ygdrasyl.mdx',
        'timeline/index.json',
        'writing/ai-novel-generation.mdx',
        'writing/big-compute.mdx',
        'writing/external.json',
        'writing/gradient-descent.mdx',
        'writing/index.json',
        'writing/knowledge-graphs-and-llms.mdx',
        'writing/person-of-compute.mdx',
        'writing/post-labour.mdx',
        'writing/predictive-chat.mdx',
        'writing/what-is-gen-art.mdx'
    ]

    with open(output_file, 'w', encoding='utf-8') as output:
        for file_path in files_of_interest:
            full_path = os.path.join(root_dir, file_path)
            if os.path.exists(full_path):
                output.write(f"File: {file_path}\n\n")
                output.write(read_file_contents(full_path))
                output.write("\n\n" + "="*80 + "\n\n")
            else:
                output.write(f"File not found: {file_path}\n\n")

if __name__ == "__main__":
    write_code_contents('content_files.txt')
    print("Content files have been written to content_files.txt")