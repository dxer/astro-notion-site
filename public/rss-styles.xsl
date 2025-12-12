<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>RSS Feed - <xsl:value-of select="/rss/channel/title"/></title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #fafafa;
          }
          .header {
            background: white;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header h1 {
            margin: 0 0 10px 0;
            color: #000;
          }
          .header p {
            margin: 0;
            color: #666;
          }
          .info {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border-left: 4px solid #2196f3;
          }
          .item {
            background: white;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .item h2 {
            margin: 0 0 10px 0;
          }
          .item h2 a {
            color: #000;
            text-decoration: none;
          }
          .item h2 a:hover {
            color: #2196f3;
          }
          .item .meta {
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
          }
          .item .description {
            color: #444;
          }
          .categories {
            margin-top: 15px;
          }
          .category {
            display: inline-block;
            background: #f0f0f0;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            margin-right: 8px;
            margin-bottom: 4px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
        </div>
        
        <div class="info">
          <strong>📡 This is an RSS feed</strong><br/>
          Copy the URL from your browser's address bar into your RSS reader app to subscribe to this feed.
        </div>
        
        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <h2>
              <a href="{link}" target="_blank">
                <xsl:value-of select="title"/>
              </a>
            </h2>
            <div class="meta">
              Published: <xsl:value-of select="pubDate"/>
            </div>
            <div class="description">
              <xsl:value-of select="description"/>
            </div>
            <xsl:if test="category">
              <div class="categories">
                <xsl:for-each select="category">
                  <span class="category"><xsl:value-of select="."/></span>
                </xsl:for-each>
              </div>
            </xsl:if>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>