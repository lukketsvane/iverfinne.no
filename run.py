import os

def read_file_contents(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def write_code_contents(output_file):
    root_dir = os.path.dirname(os.path.abspath(__file__))
    files_of_interest = [
        'pages/books/[[...slug]].tsx',
        'lib/books.ts',
        'components/bookshelf.tsx',
        'pages/_app.tsx',
        'pages/index.tsx',
        'lib/mdx.ts',
        'lib/projects.ts',
        'lib/writing.ts',
        'pages/projects/[slug].tsx',
        'pages/projects/index.tsx',
        'pages/writing/[slug].tsx',
        'pages/writing/index.tsx',
        'components/layout.tsx',
        'components/timeline.tsx',
        'scripts/generate-content.mjs',
        'scripts/generate-sitemap.mjs',
        'next.config.js'
    ]

    with open('all_code_contents.txt', 'w', encoding='utf-8') as output:
        for file_path in files_of_interest:
            full_path = os.path.join(root_dir, file_path)
            if os.path.exists(full_path):
                output.write(f"File: {file_path}\n\n")
                output.write(read_file_contents(full_path))
                output.write("\n\n" + "="*80 + "\n\n")
            else:
                output.write(f"File not found: {file_path}\n\n")

if __name__ == "__main__":
    write_code_contents('all_code_contents.txt')
    print("Code contents have been written to all_code_contents.txt")