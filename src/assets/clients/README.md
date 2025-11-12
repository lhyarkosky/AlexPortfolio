# Client Assets Directory Structure

This directory contains all client portfolio assets organized by client.

## Directory Structure

```
clients/
├── client1-logo.jpg          # Tech Startup Inc. logo
├── client2-logo.jpg          # Bella Vista Restaurant Group logo  
├── client3-logo.jpg          # FitLife Wellness Studio logo
├── client1/                  # Tech Startup Inc. portfolio
│   ├── post1.jpg            # Series A announcement campaign
│   ├── post2.jpg            # Product launch strategy
│   └── post3.jpg            # Thought leadership content
├── client2/                  # Bella Vista Restaurant Group portfolio
│   ├── post1.jpg            # Food photography
│   └── post2.jpg            # Behind-the-scenes content
└── client3/                  # FitLife Wellness Studio portfolio
    ├── post1.jpg            # Grand opening campaign
    ├── post2.jpg            # Member transformation stories
    ├── post3.jpg            # Class highlight videos
    └── post4.jpg            # Instructor spotlight series
```

## Adding New Clients

1. Create a new folder for the client: `clientX/`
2. Add the client logo: `clientX-logo.jpg`
3. Add portfolio images in the client folder
4. Update `clients.js` with the new client data

## Image Guidelines

- **Logos**: Square format, 400x400px minimum, PNG or JPG
- **Portfolio items**: 1200x800px minimum for best quality
- **File naming**: Use descriptive names (e.g., `social-media-campaign.jpg`)
- **File size**: Optimize for web (under 500KB per image)

## Placeholder Images

Until you add real client assets, you can use placeholder images or the CSS placeholder system will generate initial letters for logos.