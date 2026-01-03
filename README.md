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

Or use Docker to run Hugo without installing it locally.

- **Container** - [Install Container](https://github.com/apple/container)

## Installation & Setup(Locally)

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

## Installation & Setup (Using Container)

1. Clone the repository:
```bash
gh repo clone satoshicano/satoshicano.dev
cd satoshicano.dev
```

2. Build and run the development server using Container:
```bash
container run \
  --name hugo-dev \
  --rm \
  -p 1313:1313 \
  -v "$PWD:/src" \
  -w /src \
  -it \
  hugomods/hugo:latest \
  hugo server --bind 0.0.0.0
```

The site will be available at `http://localhost:1313/`

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

## Deployment

This site is hosted on Cloudflare Pages. To deploy:
1. Push changes to the main branch.
2. Cloudflare Pages will automatically build and deploy the site.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
