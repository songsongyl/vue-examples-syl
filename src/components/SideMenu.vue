<template>
    <ul id="cleft">
        <div class="cleft_top">
            <div class="cleft_topbg">
                <div class="cleftbg_img"><img src="/src/assets/images/tx.jpg" alt="头像" /></div>
            </div>
            <div class="cleftbg_p">要每天都有好心情吖~</div>
        </div>
        <li v-for="(item, index) in menuItems" :key="index" :style="index === 0 ? { backgroundColor: '#ececec' } : {}">
            <img :src="item.icon" />
            <span>{{ item.name }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideMenu',
    data() {
        return {
            menuItems: [
                { name: '地域美食', icon: '/src/assets/font/cnmsb01.png' },
                { name: '北京烤鸭', icon: '/src/assets/font/cnmsb02.png' },
                { name: '江苏大闸蟹', icon: '/src/assets/font/cnmsb03.png' },
                { name: '广东早茶', icon: '/src/assets/font/cnmsb04.png' },
                { name: '福建佛跳墙', icon: '/src/assets/font/cnmsb05.png' },
                { name: '云南过桥米线', icon: '/src/assets/font/cnmsb07.png' },
                { name: '西湖醋鱼', icon: '/src/assets/font/cnmsb01.png' }
            ]
        }
    }
}
</script>

<style scoped>
/* Styles for the side menu */
#cleft {
    width: 200px;
}

#cleft li {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
}

#cleft li img {
    margin-right: 10px;
}

.cleft_top {
    text-align: center;
}
</style>
