<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  padding: 0px;
  margin: 0px;
  color: #333b3e;
  line-height: 1.5em;
  font-family: 'Arial Rounded MT', 'OpenSans',"Microsoft Yahei","Microsoft Jhenghei","Hiragino Sans GB", Arial,Lucida,Verdana,SimSun,Helvetica,sans-serif;
  background-color: #000;
}
*{
  box-sizing: border-box;
}
ul, li, p{
  padding: 0px;
  margin: 0px;
}
li{
  list-style: none;
}
input {
    border: none;
}
input[type=text], input[type=tel], input[type=email], input[type=button] {
    -webkit-appearance: none;
    box-shadow: none;
}
:focus {
    outline: 0
}

._clear:after {
  content: "";
  display: block;
  clear: both;
}
</style>
