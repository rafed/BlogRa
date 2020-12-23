---
title: Make Diagrams with Mermaid
date: 2020-12-20
tags: [mermaid]
mermaid: true
image: diagram.png
---

Mermaid is an awesome software engineering diagramming tool. Write markdowns like this-

{{<highlight markdown>}}
graph TD  
A[Client] --> B[Load Balancer]  
B --> C[Server01]  
B --> D[Server02]  
{{</highlight>}}

to generate diagrams like this-

<div class="mermaid">
    graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server01]
    B --> D[Server02]
</div>

Find more about mermaid at [mermaid-js.github.io/mermaid/](https://mermaid-js.github.io/mermaid/#/)