const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","发布教师信息","发布名师信息"],"menu":"讲师","menuJump":"列表","tableName":"jiangshi"}],"menu":"讲师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"普通管理员","menuJump":"列表","tableName":"putongguanliyuan"}],"menu":"普通管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程管理员","menuJump":"列表","tableName":"kechengguanliyuan"}],"menu":"课程管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"课程分类","menuJump":"列表","tableName":"kechengfenlei"}],"menu":"课程分类管理"},{"child":[{"buttons":["查看","修改","删除","新增","查看评论","发布名师推荐"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"名师","menuJump":"列表","tableName":"mingshi"}],"menu":"名师管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"名师","menuJump":"列表","tableName":"mingshi"}],"menu":"名师管理"},{"child":[{"buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["确认收货","查看"],"menu":"已发货订单","tableName":"orders/已发货"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看评论","查看"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"名师","menuJump":"列表","tableName":"mingshi"}],"menu":"名师管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"讲师","tableName":"jiangshi"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"普通管理员","tableName":"putongguanliyuan"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程管理员","menuJump":"列表","tableName":"kechengguanliyuan"}],"menu":"课程管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论","发布热门课程"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程分类","menuJump":"列表","tableName":"kechengfenlei"}],"menu":"课程分类管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"课程管理员","tableName":"kechengguanliyuan"}]
    }
}
export default menu;