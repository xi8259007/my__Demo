<template lang="html">
	<header>
		<div class="container">
			<div class="header__logo">
				<a href="/#/" class="header__brand">我来组成头部</a>
			</div>
			<nav>
				<ul class="nav navbar">
					<li class="nav__item"><router-link to="/button">按钮</router-link></li>
					<li class="nav__item"><router-link to="/table">表格</router-link></li>
					<li class="nav__item"><router-link to="/form">表单</router-link></li>
					<li class="nav__item"><router-link to="/list">列表</router-link></li>
					<li class="nav__item"><router-link to="/alert">弹出层</router-link></li>
					<li class="nav__item"><router-link to="/css">样式</router-link></li>
					<li class="nav__item"><router-link to="/svg">SVG</router-link></li>
					<li class="nav__item"><router-link to="/canvas">Canvas</router-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<script>
export default {
    name: 'myHeader',
    data () {
        return {

        }
    },
    mounted () {
    }
}
</script>
