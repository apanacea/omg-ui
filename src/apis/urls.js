const baseUrl = 'http://localhost:8081/api'

export default {
    // 图片列表
    photos: baseUrl + '/photos',

    // 查询演员列表
    selectPerformers: baseUrl + '/performers',
    // 添加演员
    createPerformer: baseUrl + '/performer',
    // 删除演员
    deletePerformer: baseUrl + '/performer/',

    selectFilms: baseUrl + '/films'
}