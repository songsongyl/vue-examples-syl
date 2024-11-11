<template>
    <div id="cright">
        <div id="nav01">
            <div class="nav01_left">
                <div class="nav01_logo">
                    <img src="/src/assets/images/cnm.sb_logo.svg" />
                    <h4>地域美食站</h4>
                </div>
                <div class="nav01_wz">
                    <h5>吃乃人生第一大事</h5>
                    <div class="bar"></div>
                </div>
            </div>
            <div class="nav01_right">
                <div class="nav01_tpw">
                    <p>愿成长- 不负众望</p>
                </div>
            </div>
        </div>

        <div v-for="(content, index) in contentList" :key="index" :id="content.id">
            <div :class="['nav02_bg', content.bgClass]">
                <div class="nav02_bt">{{ content.title }}</div>
            </div>
            <div class="nav02_kj" :style="{ height: content.height }">
                <div v-if="content.image" class="nav02_grzl_headimg">
                    <img :src="content.image" alt="[头像]" />
                </div>
                <div class="nav02_grzl_txt">
                    <div v-for="(text, idx) in content.texts" :key="idx">
                        <p>{{ text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            contentList: [
                {
                    id: 'nav02',
                    title: '北京烤鸭',
                    bgClass: 'nav02_bg_class',
                    height: '600px',
                    image: '/src/assets/images/1.png',
                    texts: [
                        '制作工艺:腌制 风干 烘烤',
                        '食用方式：传统 汤品',
                        '吃法：蘸白糖 甜面酱加葱',
                        '外皮酥脆',
                        '肉质鲜嫩',
                        '香气扑鼻',
                        '丰富的文化内涵',
                        '制作工艺复杂',
                        '广泛的流行性',
                        '通常与甜面酱、葱丝和黄瓜条一起食用，搭配薄饼',
                        '多次被选为国宴菜肴',
                        '.........'
                    ]
                },
                {
                    id: 'nav03',
                    title: '江苏大闸蟹',
                    bgClass: 'nav03_bg_class',
                    height: 'auto',
                    texts: [
                        '江苏大闸蟹，主要指的是阳澄湖大闸蟹，以其肉质鲜美、味道独特而闻名。',
                        '大闸蟹是一种淡水蟹，属于蟹类中的一种,以其鲜活、肥美的特点著称，尤其是母蟹，蟹黄丰富，味道醇厚。公蟹则肉质紧实，口感滑嫩。'
                    ]
                },
                {
                    id: 'nav04',
                    title: '广东早茶',
                    bgClass: 'nav04_bg_class',
                    height: 'auto',
                    texts: [
                        '广东早茶，亦称“饮茶”，是广东地区特有的饮食文化，通常在早餐或午餐时段享用。',
                        '它以丰富多样的点心和茶品为特色。',
                        '历史渊源：早茶文化起源于宋朝，经过明清时期的发展，逐渐演变成一种日常饮食习惯，成为粤菜文化的重要组成部分。',
                        '茶品选择：广东早茶常用的茶叶包括铁观音、普洱、乌龙茶等，饮茶的过程中，茶的香气与点心的味道相得益彰，增强了用餐的体验。'
                    ]
                }
                // Add more items as needed...
            ]
        }
    }
}
</script>

<style scoped>
/* Styles for content */
#cright {
    padding: 20px;
    flex-grow: 1;
}

.nav02_bg {
    background-color: #f4f4f4;
}

.nav02_kj {
    padding: 20px;
}

.nav02_grzl_headimg img {
    width: 100px;
    height: 100px;
}

.nav02_grzl_txt {
    margin-top: 20px;
}

.nav02_grzl_txt p {
    margin-bottom: 10px;
}
</style>
