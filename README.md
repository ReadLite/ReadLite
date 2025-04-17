# ReadLite - Simple Reading Mode

A browser extension that provides a clean, distraction-free reading experience with AI summarization capabilities.

![ReadLite Screenshot](assets/screenshot.png)

## Features

- **Clean Reader Interface**: Transform cluttered web pages into a beautiful, distraction-free reading experience
- **AI Article Summarization**: Get instant summaries and insights about what you're reading
- **Multiple Themes**: Choose from Light, Dark, Sepia, and Paper themes to suit your preference
- **Adjustable Typography**: Customize font size, line spacing, and width for optimal reading comfort
- **Article Saving**: Save articles as markdown for offline reading

## Usage

1. Install the extension from the Chrome Web Store (coming soon)
2. Navigate to any article or blog post
3. Click the ReadLite icon in your browser toolbar
4. Enjoy a clean reading experience
5. Use the AI button to get summaries and ask questions about the article

## Development

### Prerequisites
- Node.js (v16+)
- Yarn or npm

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/read-lite.git
cd read-lite

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Build for production
```bash
yarn build
```

## Technical Details

This extension is built with:
- [Plasmo Framework](https://www.plasmo.com/) - Browser extension framework
- [React](https://reactjs.org/) - UI library
- [Mozilla Readability](https://github.com/mozilla/readability) - Content extraction
- [Marked](https://marked.js.org/) - Markdown parsing

## License

MIT

## Translation

- [中文说明](./README.zh.md)
