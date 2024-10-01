### iverfinne.no

1. **Install Dependencies:**
   ```sh
   yarn install
   ```

2. **Generate Content:**
   ```sh
   yarn generate:content
   ```

3. **Run the Development Server:**
   ```sh
   yarn dev
   ```

4. **Build for Production:**
   ```sh
   yarn build
   yarn start
   ```

6. **Generate Sitemap:**
   ```sh
   yarn generate:sitemap
   ```

git add .
git commit -m "Update dependencies and configurations"
git push origin main
rm -rf node_modules yarn.lock
yarn install
yarn build
yarn start
vercel --prod

my personal webpage
