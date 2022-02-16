import{S as x,i as C,s as E,B as N,e as f,j as v,v as I,V as O,c as b,d as l,l as k,a as S,w as T,b as u,D as g,f as _,x as $,y as P,z as W,p as A,n as M,A as j}from"../chunks/vendor-f28c4b56.js";import{T as H}from"../chunks/title-53d80759.js";import{A as L}from"../chunks/article-94fdd433.js";function z(c){let t,d,a,n,p,i,o,h;n=new H({props:{first:"about",second:"me"}});const m=[{aboutme:!0},c[0]];let w={};for(let e=0;e<m.length;e+=1)w=N(w,m[e]);return o=new L({props:w}),{c(){t=f("meta"),d=v(),a=f("main"),I(n.$$.fragment),p=v(),i=f("div"),I(o.$$.fragment),this.h()},l(e){const s=O('[data-svelte="svelte-11mdtje"]',document.head);t=b(s,"META",{name:!0,content:!0}),s.forEach(l),d=k(e),a=b(e,"MAIN",{class:!0});var r=S(a);T(n.$$.fragment,r),p=k(r),i=b(r,"DIV",{class:!0});var y=S(i);T(o.$$.fragment,y),y.forEach(l),r.forEach(l),this.h()},h(){document.title="tristanlukens | About",u(t,"name","description"),u(t,"content","About page of Tristan Lukens' personal website."),u(i,"class","-mt-8"),u(a,"class","page")},m(e,s){g(document.head,t),_(e,d,s),_(e,a,s),$(n,a,null),g(a,p),g(a,i),$(o,i,null),h=!0},p(e,[s]){const r=s&1?P(m,[m[0],W(e[0])]):{};o.$set(r)},i(e){h||(A(n.$$.fragment,e),A(o.$$.fragment,e),h=!0)},o(e){M(n.$$.fragment,e),M(o.$$.fragment,e),h=!1},d(e){l(t),e&&l(d),e&&l(a),j(n),j(o)}}}function D(c){return[{title:void 0,source:`
Hi! I'm Tristan, 15 years old and live in the Netherlands (and was also born there).

I like development, especially web development (now Svelte, Tailwind and TS). Go as well, but I haven't done
too much with that yet. Rust looks nice too. Might look into that. Anyway, like
I said, I spend the most time doing web dev, and have been for a little more than
a year at the time of writing; I started in November 2020.

---

## Development story

It's been a long time. I started programming in 2018 with Swift Playgrounds on my iPad mini. I did not have a computer at the time. When I did get one, 
(a 2011 iMac), I went to Xcode and started to learn iOS app development. Xcode was an absolute 
disaster back then: it was slow, buggy and genuinely unfun to use. Even when I got my 2012 Mac mini. I quit, 
and bought a Unity game development course on Udemy in 2019. I should have known however,
that a computer with a 2012 integrated GPU wouldn't cut it. It was too slow.

I stopped for a while, but picked up iOS app development again in May(?) of 2020. Still didn't work, moved on
to Python. Which I couldn't get working: there's two commands: \`python\` and \`python3\`. You
want \`python3\` nowadays, but most people alias \`python\` to \`python3\`, and a tutorial told me so.
I was on macOS Catalina at the time, and it uses \`zsh\` by default. Mojave (the previous major
release) uses \`bash\`. Well, you probably know where this is going. I wanted to set an alias for
\`zsh\` in \`$HOME/bash_profile\`. When I eventually figured out how to set the alias, I didn't
restart my shell when I set the alias. Yeah.

I'm not that bummed about not learning Python though. I hate Python nowadays for its syntax (WHY TABS AND NOT
NOT CURLY BRACKETS) and the fact that it's interpreted. I guess I'm more old school (and I started with a sane
programming language (Swift)). Sue me. I dare you.

Around about November 2020 I stumbled upon [this](https://www.youtube.com/watch?v=vQWlgd7hV4A&t=8993s) video.
This did work! HTML is just a little bit of text after all. No compiling
or installation involved. Just VS Code, which was a rather simple \`brew install visual-studio-code\`
because I had played with the terminal before. Besides, I had tinkered with Linux already (and completely
screwed a system (well, two, actually)), but that's a story for another blog post).

When I finished Dev Ed's video, I activated a free trial for Skillshare and
my parents bought a year-long subscription after it expired.

In summer 2021, I started the Go tutorial by Tech with Tim.

I now use Svelte, TailwindCSS and TypeScript on a daily basis. At the time of writing this very sentence (the 16th
of Febuary, 2022 because of small mistakes) I'm working on a markdown lexer. The plan is to make a markdown -> html
transpiler, but the code I have at the moment is very messy so we'll have to see if I'll ever get to the
transpliler step. The thing's writting with vanilla HTML and TailwindCSS, and with vanilla JS. I wanted to try this
for seeing how good TS actually is compared to vanilla, but I might go back to TS in the future.

## Music

On another note: I'm a drummer! I love music and cannot go without. Mostly
rock and metal, but hip hop and the occasional edm is pretty cool too.

## About this website

This site was made with Svelte, SvelteKit, TailwindCSS and TypeScript.

This is the second version of this site. The first is still on
GitHub, at https://github.com/tristanlukens/old-website if that's not private.

Keep in mind that when I was creating this website, I wanted it to look
good on screen sizes as small as the iPhone 5, horizontal and vertical.

The website was also tested on Chrome, Firefox and Safari, all on mobile and on desktop, their
versions being the most recent stable releases of each on the 5th of January, 2022.

Other devices and browsers **were not tested**.

---

I could talk about lots and lots more, but the rest will come with blog posts :)
		`,author:"Tristan Lukens",date:"04-01-2022"}]}class V extends x{constructor(t){super();C(this,t,D,z,E,{})}}export{V as default};
