// const baseUrl = 'http://localhost:8080'
const baseUrl = 'http://62.234.10.88/api'

export default {
    // 图片列表
    photos: baseUrl + '/photos',

    // 查询演员列表
    selectPerformers: baseUrl + '/performers',
    selectAllPerformers: baseUrl + '/allPerformers',
    selectPerformer: baseUrl + '/performer/',
    // 添加演员
    createPerformer: baseUrl + '/performer',
    updatePerformer: baseUrl + '/performer',
    // 删除演员
    deletePerformer: baseUrl + '/performer/',

    selectFilm: baseUrl + '/film/',
    selectFilmDetail: baseUrl + '/filmDetail/',
    selectFilms: baseUrl + '/films',

    // 查询演员列表
    selectTags: baseUrl + '/tags',
    // 添加演员
    createTag: baseUrl + '/tag',
    // 删除演员
    deleteTag: baseUrl + '/tag/',

    selectSeries: baseUrl + '/series/',
    selectAllSeries: baseUrl + '/allSeries',

    uploadPerformerAvatar: baseUrl + '/upload/performerAvatar',
}