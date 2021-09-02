# 🖥️ LHCb Web Event && Geometry Display Project

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

<div align="center">

[![License][license-img]][license-url]
 ![Repository Size](https://img.shields.io/github/repo-size/andrewpap22/LHCb_WebDisplay)
 ![Last Commit](https://img.shields.io/github/last-commit/andrewpap22/LHCb_WebDisplay)
 ![Open Issues](https://img.shields.io/github/issues/andrewpap22/LHCb_WebDisplay?color=important)
 ![Open Pull Requests](https://img.shields.io/github/issues-pr/andrewpap22/LHCb_WebDisplay?color=yellowgreen)
 [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

[license-img]: https://img.shields.io/github/license/hsf/phoenix.svg
[license-url]: https://github.com/hsf/phoenix/blob/master/LICENSE

</div>

<div align="center">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fandrewpap22%2FLHCb_WebDisplay&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://lhcb-web-display.app.cern.ch/)

</div>

## 🚀 Up on

* 🌐 [CERN](https://lhcb-web-display.app.cern.ch/)

## 📂 Project Structure

```bash
.
├── angular.json
├── Dockerfile
├── karma.conf.js
├── LICENSE
├── nginx.conf
├── package.json
├── projectStructure.txt
├── README.md
├── src
│  ├── app
│  │  ├── app.component.html
│  │  ├── app.component.scss
│  │  ├── app.component.spec.ts
│  │  ├── app.component.ts
│  │  ├── app.module.ts
│  │  ├── gltf-exporter
│  │  │  ├── gltf-exporter.component.html
│  │  │  ├── gltf-exporter.component.scss
│  │  │  ├── gltf-exporter.component.spec.ts
│  │  │  └── gltf-exporter.component.ts
│  │  ├── home
│  │  │  ├── home.component.html
│  │  │  ├── home.component.scss
│  │  │  ├── home.component.spec.ts
│  │  │  └── home.component.ts
│  │  └── lhcb-experiment
│  │     ├── lhcb-experiment.component.html
│  │     ├── lhcb-experiment.component.scss
│  │     ├── lhcb-experiment.component.spec.ts
│  │     └── lhcb-experiment.component.ts
│  ├── assets
│  │  ├── event-data
│  │  │  └── LHCbEventDataV2.json
│  │  ├── favicon
│  │  │  └── favicon.ico
│  │  ├── geometry
│  │  │  ├── lhcb.gltf
│  │  │  ├── LHCb_run2_ECAL.gltf
│  │  │  ├── LHCb_run2_HCAL.gltf
│  │  │  ├── LHCb_run2_MUON.gltf
│  │  │  ├── LHCb_run3.root
│  │  │  ├── LHCb_run3_ECAL.gltf
│  │  │  ├── LHCb_run3_FT.gltf
│  │  │  ├── LHCb_run3_HCAL.gltf
│  │  │  ├── LHCb_run3_MAGNET.gltf
│  │  │  ├── LHCb_run3_MagnetCover.gltf
│  │  │  ├── LHCb_run3_MUON.gltf
│  │  │  ├── LHCb_run3_PIPE.gltf
│  │  │  ├── LHCb_run3_Rich_AfterMagnet.gltf
│  │  │  ├── LHCb_run3_Rich_BeforeMagnet.gltf
│  │  │  ├── LHCb_run3_UT.gltf
│  │  │  ├── LHCb_run3_VP.gltf
│  │  │  ├── LHCb_run3_VP_better_Performance.gltf
│  │  │  └── lhcbfull.root
│  │  ├── icons
│  │  │  ├── add-icon.svg
│  │  │  └── zoom-out.svg
│  │  └── images
│  │     ├── geometry.svg
│  │     ├── LHCb.svg
│  │     ├── lhcb_logo.png
│  │     └── playground.svg
│  ├── environments
│  │  ├── environment.prod.ts
│  │  ├── environment.single.ts
│  │  └── environment.ts
│  ├── index.html
│  ├── main.ts
│  ├── polyfills.ts
│  ├── styles.scss
│  └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── yarn.lock

## I've removed lot's of stuff from assets as this was getting huge.
```

## 💬 Summary

The following project consists of an **important** part of my work @[CERN](https://home.cern/) 
as a [Software Engineer](https://gitlab.cern.ch/anpappas) (TECH) for the years of 2021-2022 on the [LHCb](http://lhcb-public.web.cern.ch/) the Large Hadron Collider beauty experiment.

In Particular it consists of two parts.

1. *The LHCb Web Event and Geometry display* itself
2. *The .root to .gltf Exporter*

Details: 

## 🖥️ LHCb Web Event and Geometry Display

> The project is mainly using the [Phoenix Framework](https://github.com/HSF/phoenix) for it's UI which was selected for the years of 2019 and 2020 as a Google Summer of Code [GSoC](https://summerofcode.withgoogle.com/) Project, to which **I'm a contributor**! 

### ⌨️ Local Development

For running the project locally on your machine you will need **Node.js**, **npm** and **yarn**.

#### ⬇️ Get Node.js and npm 

> /// Note that npm comes alongside Node.js 

The recommended way to get the latest versions is to use the `Node Version Manager` a.k.a [nvm](https://github.com/nvm-sh/nvm)

Please do follow the instructions on the following 👉 [README.md](https://github.com/nvm-sh/nvm/blob/master/README.md) to get latest stable versions of Node.js and npm for the family of UNIX operating systems. (MacOS and Linux)
For Windows you can follow the same instructions by using [gitBash](https://gitforwindows.org/) or
by downloading Node.js from their [website](https://nodejs.org/en/).

#### ⬇️ Get yarn, install dependencies and run the project locally

Once you have Node.js and npm, install yarn by issuing the following command: 

```bash
$ npm install --global yarn
```

Then, do `git clone` the project locally and be sure you're into the `./LHCb_WebDisplay` directory and then:

```bash
### Install the required dependencies 

$ yarn install

### Run the project in development / watch mode

$ yarn start
```

Now, `LHCb_WebDisplay` will start in development / watch mode. Any change made to the source code while the local server is running, will rebuild and hot reload the project itself. 

You can access and view the `LHCb_WebDisplay` as well as the *GUI* for the `gltf_exporter` (which we'll analyse later on) by heading into the browser of your choice and typing into the address bar: `http://localhost:4200/`

> /// TODO
> /// Do write at this point some information about the project and the UI 
> /// Showcase an animated gif with some of the features

## 🖼️ ROOT to Gltf Exporter

> /// TODO
> /// Do write detailed information about the use of the gui and non gui exporter about it's purpose and usage
> /// Do add an animated gif demonstrating the usage

&copy; [CERN](https://home.cern/) 2021 by [\<Andreas\> \<\\A. Pappas\>](https://twitter.com/AndreasPappas22) @[LHCb](https://lhcb.web.cern.ch/)

-------------------------------------------------------------------------------------------------------------------------
TODOs: 

vhmata gia full successfull local dev tou project ✅
vhmata gia to deployment me ta commands apo to gitlab
plhrofories gia to okd4 
info to execute project using docker
point to Phoenix Documentation for info on how to setup another experiment, as we did with this one
and add detailed information on how the gui and non gui gltf exporter can be used to export geometries and display them.
na deiksw kapoia screenshots h video gia to pws douleuoun ta 2 project. (na kanw record to screen mou me to peek)
--------------------------------------------------------------------------------------------------------------------------