---
title: "34-by-34: Blog Upload Process (6/34)"
description: "A look into the easy and streamlined blog upload process."
date: "2025-05-16"
slug: "/34-by-34/posting-process/"
tags:
  [
    "34-by-34",
    "personal growth",
    "life journey",
    "milestone project",
    "Technical Walkthrough",
    "how-to",
    "freestyle writing",
    "journaling",
  ]
excerpt: "A look into the easy and streamlined blog upload process."
---

## Posting a New Blog Post

I’d like to quickly walk through my process for uploading a new post. This post will be a bit more technical, but my hope is that it stays accessible.

### By making a new branch of my project, I am able to complete the development changes necessary and upload a single commit to a remote branch.

My GitHub project is setup to spin up a new build on Netlify whenever a new pull request is created. I simply create a new pull request for that new branch, merge the branch, and it’s deployed to production. I can even see a deploy preview when the PR is created such that I can make sure to check for any funky errors before deploying to production.

### Here is my quick and easy process for uploading a new blog entry:

#### 1) Make a New Branch in SourceTree

![New branch](/images/blog-6/new-branch.png)

#### 2) Create a New Blog Page in VS Code

![New branch](/images/blog-6/explorer-new-page.png)

#### 3)r Copy Content from Notion into Markdown Page

<aside class="callout">
  <div>💡</div> <div><strong>Note:</strong> I realized that taking screenshots of my screen and storing them on Notion was causing an inefficiency. I would have to download the image and reupload to the project `static/images` folder. A great approach to minimize manual labor is to just create a folder in Finder for my new blog post and just upload them directly. </div>
</aside>

#### 4) Add Metadata to Top of File

![Blog metadata](/images/blog-6/metadata.png)

#### 5) Save and Run Project

![building project](/images/blog-6/building-project.png)

![project started](/images/blog-6/project-started.png)

#### 5) Page is Ready

Now, all we have to do is double-check the styling and make sure it looks like we're expecting it to.

![project running](/images/blog-6/project-running.png)

#### 5) Commit Changes

Finally, I go back to SourceTree, stage changes I'd like to keep, add a commit message, and push to my remote repository.

![commit changes](/images/blog-6/commit-changes.png)

## Conclusion

Pretty cool to come and revisit analytics and not need to worry about doing anything different in my uploading process to make sure they’re being tracked. I’m looking forward to continue, and to see how different techniques and posting cadences yield different results.
