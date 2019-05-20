---
layout: post
title: A Brief Introduction to Abstract
date: 2019-05-19
tags: posts
categories: posts
image: /images/abstract_logo_card.png
summary: What is Abstract and how can I use it with my design team?
---

<img alt="Abstract Logo" src="/images/abstract_logo.svg" width="200px" />

### What is Abstract?

[Abstract](https://abstract.com) is a version control system for designers. It enables each member of your team to always have the latest design assets, even if multiple people are working on the same files in tandem.

This is a brief overview of the product, covering key concepts, workflow suggestions, and other learnings from spending a couple of months using it.

### Sketch Integration

Before getting into the specifics, it's important to note this tool requires [Sketch](https://sketch.com) to be the design environment of choice within your team. You can simply import your current file directory into Abstract, or start a fresh. The companion plugin enables the full extent of its capabilities.

Abstract essentially becomes your entry point into Sketch from here on in.


### The Workflow

If you're familiar with version control as a concept, or happen to work closely with Developers, you're more than likely going to pick up on the terms used within Abstract without needing much on-boarding.

A conscious decision was made by the creators of the tool to keep the parallels consistent between the language used for the product's interface, and the popular version control system, [Git](https://git-scm.com/).

Some key things to be aware of while using Abstract:

- Branch
- Master
- Commit
- Naming
- Approval and merging
- Untracked changes

Much like version control for software development, there is no enforced workflow as such, so this is something you should agree with your team upfront to avoid unwanted approvals making their way into the main source files.


#### Branch

Let's say you're working on a UI solution for a problem or feature, creating a new branch will allow you to focus in on the task at hand, and will be temporarily decentralised from the main file system. By branching off, the team will also have visibility that work on this feature has begun, and will know who to speak with if external factors effect this stream of work.

<img alt="Abstract Create Branch" src="/images/abstract_create_branch.png" width="100%" />


#### Master Branch

The master branch is just that, the master. This should be treated as the single source of truth for your design project. This is where all streams of work will start and end (mostly). Abstract does feature certain precautions that shield any work committed to this branch from being mistakenly overridden.


#### Commit

As you make updates to your source file, Abstract will be tracking these changes and will kindly remind you they need to be committed to the branch you are currently working on. This is a way of saving progress in small increments that make sense to be bundled together.

<img alt="Abstract Commit Changes" src="/images/abstract_commit_sketch.png" width="100%" />

For example you might commit of a series of significant changes that relate to a particular UI component. The trick here is to make sure you can sum up the commit in a handful of words. Keep in mind you may need to revert back to these at a later date however, so you may want to keep these descriptive.

#### Naming

Browsing through work streams tends to be a lot smoother when your team hires a branch naming convention.

I’ve been using the following approach:

`[type]/[feature-name]`

For example, if we're working on the UI for a new feature:

`feature/insights-filtering`

And if we’re making an improvement to an existing feature based on usage:

`optimisation/insights-filtering`

Pretty straight forward, but shorter names can be easier to stick to for larger teams.

Others tend to suggest adding sprint details to branch names. While this makes sense in some cases, we tend to find that this restricts things a little. If you’re using story or ticket numbers for tasks that will have a short life span however, this could be a suitable reference to include, and particularly helpful for other members of the team during reviews and hand-off.

`feature/243/insights-filtering`

#### Approval and Merging

This is potentially the most crucial point in your team’s workflow within Abstract. Approval for merging into Master.

<img alt="Abstract Merge Confirmation" src="/images/abstract_merge_confirmation.png" width="100%" />

The flow we’ve adopted:

1. Branch from master
2. Make changes 
3. Commit changes
4. Submit merge request 
5. Desk critique 
6. Make any necessary changes 
7. Desk critique
8. Lead designer merges and resolves conflicts

Desk critiques are ad hoc design reviews for the team, which bring with them a couple of important benefits. Firstly, the workflow isn’t held up. Secondly, and perhaps more importantly, they ensure the design team is regularly sharing ideas.

In my experience this process has removed any roadblocks when it comes to sharing design updates, and is particularly effective when everyone in the immediate product team has access to Abstract. Developing shared visibility of the design direction early on is crucial.

Approving changes from this point on tends to be a little smoother. Keep an eye out for conflicts when merging in lengthy file updates. Abstract does a good job of automatically resolving these, but you may sometimes need to make a decision on which text style to go with.


#### Untracked Changes

Let’s say you’re looking to demonstrate to a colleague how a certain component might behave under a niche circumstance. If you’re happy this change won’t make it’s way back into Abstract, you have the ability to open a file as ‘untracked’. Save the file locally, or discard.

There are many more aspects to the tool that enable more than managing file changes. These range from collections, presentations to public sharing. Tackling the many obstacles we face during various stages of the design process.

In a world with so many design tools, Abstract are really onto something here.

Abstract has put an end to our design team worrying about which file is the latest and who is working on which feature, leaving us to concentrate on problem solving for our users.