// const baseUrl = 'http://localhost:8080'
const baseUrl = 'http://62.234.10.88/api'

export default {
    // 图片列表
    photos: baseUrl + '/photos',

    // 查询演员列表
    selectPerformers: baseUrl + '/performers',
    // 添加演员
    createPerformer: baseUrl + '/performer',
    // 删除演员
    deletePerformer: baseUrl + '/performer/',

    selectFilms: baseUrl + '/films',

    // 查询演员列表
    selectTags: baseUrl + '/tags',
    // 添加演员
    createTag: baseUrl + '/tag',
    // 删除演员
    deleteTag: baseUrl + '/tag/',

    uploadPerformerAvatar: baseUrl + '/upload/performerAvatar',
}