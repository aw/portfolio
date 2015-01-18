# Your GitHub Portfolio

Curate your code and show the world how great you are

## Example

Here's an example of [my curated portfolio](https://aw.github.io).

## What

Some [people](https://blog.jcoglan.com/2013/11/15/why-github-is-not-your-cv/)
believe GitHub is not your CV. I agree with the idea that a profile
without context is meaningless, but rather than sit back and complain, I decided
to do something about it.

This weekend project of mine is designed to help developers showcase their work.
It's a place to curate your code (open source or not), and provide potential
employers an opportunity to see how you think, how you work, the context of your
code, and why you might be a good fit for their company.

## Getting started

  1. Fork this repo
  2. Edit the settings in the `index.html` file
  3. Add posts to the **_posts** directory following the jekyll format: `YYYY-MM-DD-post-title.md` see [template.md](_posts/template.md)
  4. [Add a CNAME](https://help.github.com/articles/adding-a-cname-file-to-your-repository/) if you want a custom domain.
  5. Test your portfolio locally: `jekyll serve`

## Settings

The `index.html` file contains 4 settings which allow you to specify your GitHub
username, your fullname, the [Bootswatch](http://bootswatch.com/) theme, and the
[Highlight.js](http://highlightjs.org/) syntax highlighter of your choice.

Example:

    bootswatch: journal
    highlightjs: github
    githubuser: aw
    fullname: Alexander Williams

## Posts

Your posts will appear in reverse chronological order (newest first). The site can
be navigated using left/right arrow keys, by swiping (mobile) or clicking the arrow
buttons.

Simply copy the `template.md` and edit to your liking.

Once published, your portfolio will be visible on https://_username_.github.io/portfolio

### Some notes

  * `fav_snippet`, `fav_snippet_url`, `fav_review` are optional. The template will render
  without them if they're omitted.
  * There are 5 status types: `open`, `closed`, `merged` for pull requests, and
  `in-progress`, `deprecated` for regular projects.
  * `language` is used for syntax highlighting your `fav_snippet`
  * `review` should be written in proper English prose. Explain your work, constraints,
  ideas and motivations for having written the code.
  * `fav_snippet` and `fav_review` can be used to highlight something you appreciate
  in your code. It can be a great one-liner, or a line you were ecstatic to remove.

## Notice

This project uses many open sourced projects which are licensed under MIT or BSD.

  * [twemoji](https://github.com/twitter/twemoji)
  * [twemoji-awesome](https://github.com/ellekasai/twemoji-awesome)
  * [bootstrap](https://github.com/twbs/bootstrap)
  * [bootswatch](https://github.com/thomaspark/bootswatch)
  * [highlight.js](https://github.com/isagalaev/highlight.js)
  * [bespoke.js](https://github.com/markdalgleish/bespoke.js)
  * [jquery](https://jquery.org)

You can view the list in the [NOTICE](NOTICE) file.

## Thanks

Many thanks go out to the various people who have contributed and dedicated countless
"free" hours to these open source projects. Your hard work is very much appreciated.

## Contributing

If you make improvements, please do a pull-request so others can benefit from them.

## Current portfolios

Here are [other developers](PORTFOLIOS.md) using this as their portfolio.

If you're using this for your own code, please modify the [PORTFOLIOS.md](PORTFOLIOS.md)
and add your name/url to the list so others can discover your great work
(alphabetical order please, sort by first name).

## License

All code is licensed under the [MIT license](LICENSE).

All original texts and images are licensed under the [Creative Commons Attribution NonCommercial NoDerivs license](https://creativecommons.org/licenses/by-nc-nd/3.0/).
