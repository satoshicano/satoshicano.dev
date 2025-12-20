# satoshicano.dev

A personal blog and portfolio website built with Hugo.

## About

This is the source code for [satoshicano.dev](https://satoshicano.dev), a blog where I share thoughts about software engineering, tools, and development experiences.

## Tech Stack

- **Hugo** - Fast static site generator written in Go
- **Hugo Paper** - Clean and minimal Hugo theme
- **KaTeX** - Mathematical typesetting support
- **Go Modules** - Dependency management

## Project Structure

```
.
├── content/              # Blog posts and pages
│   ├── _index.md        # Home page
│   ├── about.md         # About page
│   └── posts/           # Blog post collection
├── assets/              # Asset files for Hugo processing
├── layouts/             # Custom layout templates
├── static/              # Static files (CSS, JS, images)
├── themes/              # Hugo themes
├── hugo.toml            # Hugo configuration
├── go.mod               # Go module definition
└── public/              # Generated static site (not committed)
```

## Prerequisites

- **Hugo** (Extended version recommended) - [Install Hugo](https://gohugo.io/getting-started/installing/)
- **Go 1.23+** - For module management
- **Mise** (optional) - For managing tool versions

## Installation & Setup

1. Clone the repository:
```bash
gh repo clone satoshicano/satoshicano.dev
cd satoshicano.dev
```

2. Install Hugo theme and dependencies:
```bash
hugo mod get -u
```

3. Run the development server:
```bash
hugo server
```

The site will be available at `http://localhost:1313/`

## Building

Generate the static site for production:

```bash
hugo
```

The generated site will be in the `public/` directory.

## Content Management

### Creating a New Post

1. Create a new markdown file in `content/posts/`:
```bash
hugo new posts/my-new-post.md
```

2. Edit the frontmatter and add your content:
```markdown
+++
title = "Post Title"
date = 2025-01-01
tags = ["tag1", "tag2"]
categories = ["category"]
+++

Your content here...
```

3. The site will automatically rebuild with hot reload during development.

### Supported Features

- **Markdown** - Full markdown support with extended syntax
- **KaTeX Math** - Mathematical notation with `$...$` (inline) or `$$...$$` (block)
- **Code Highlighting** - Syntax highlighting for code blocks
- **Tags & Categories** - Organize posts by topic

## Configuration

Edit `hugo.toml` to customize:

- **baseURL** - Your website URL
- **title** - Site title
- **Social Links** - Twitter, GitHub, Instagram
- **Theme Colors** - Choose from: linen, wheat, gray, light
- **Avatar** - Gravatar email or image URL
- **Bio** - Brief profile description

## Deployment

This site is ready to be deployed to:

- **Hugo Hosting** services (Netlify, Vercel, GitHub Pages)
- **Traditional Web Hosting** - Upload the `public/` directory via FTP/SFTP
- **Docker** - Containerize with your preferred base image

### Example: GitHub Pages

1. Build the site:
```bash
hugo
```

2. Push the `public/` directory to your GitHub Pages branch

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Paper Theme](https://github.com/nanxiaobei/hugo-paper)
- [KaTeX Documentation](https://katex.org/)
- [Markdown Guide](https://www.markdownguide.org/)
