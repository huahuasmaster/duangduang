<template>
    <v-card style="padding: 8px">
        <div class="name">{{dto.name}} <span>{{dto.tel}}</span></div>
        <p>{{dto.address}}</p>
    </v-card>
</template>
<script>
    export default {
        data: () => ({
            dto: {
                name: '小明',
                tel: '15897391872',
                address: '中国 浙江 杭州市 西湖区 留下街道'
            }
        }),
    }
</script>
<style type="text/css">
    .name {
        font-weight: bold;
        line-height: 30px;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 8px;
        margin-bottom: 4px;
    }
    .name span {
        float: right;
    }
    p {
        line-height: 22px;
        height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 0 0 8px;
    }
</style>