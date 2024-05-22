### iverfinne.no

#### Overview
This repository contains the source code for iverfinne.no, a personal website showcasing books, buildlog, and writings. Built with Next.js, Chakra UI, and MDX, it features dynamic content rendering and a responsive design.

#### Setup Instructions

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/iverfinne.no.git
   cd iverfinne.no
   ```

2. **Install Dependencies:**
   ```sh
   yarn install
   ```

3. **Generate Content:**
   ```sh
   yarn generate:content
   ```

4. **Run the Development Server:**
   ```sh
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. **Build for Production:**
   ```sh
   yarn build
   yarn start
   ```

6. **Generate Sitemap:**
   ```sh
   yarn generate:sitemap
   ```

#### Content Management
- Add new books, buildlog, or writings in the `content` directory.
- Run `yarn generate:content` to update the index files.

#### License
This buildlog is licensed under the MIT License.