<!--
    OpenQuiz
    Copyright (C) 2022 Kelsey Lohr

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    ***

    Icons by Icons8. See links in footer.
-->
<template id="app">
<!--   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
  body {
    margin: 0px;
    width: 100%;
    background-color: #191870;
    color: #ffffff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #app {
    text-align: center;
    margin-top: 30px;
    font-size: 18px;
    padding-right: 100px;
    padding-left: 100px;
  }
</style>