<template>
  <a-upload
      name="file"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :action="this.$urls.uploadPerformerAvatar"
      :before-upload="beforeUpload"
      @change="handleChange"
  >
    <img v-if="avatarUrl" :src="avatarUrl" alt="avatar" style="width: 102px; height: 102px"/>
    <div v-else>
      <a-icon :type="loading ? 'loading' : 'plus'"/>
      <div class="ant-upload-text">
        Upload
      </div>
    </div>
  </a-upload>
</template>
<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: 'PerformerAvatarUpload',
  props: {
    avatarUrl: null
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        this.$emit('handleAvatarSrc', info.file.response.avatarUrl)
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, avatarUrl => {
          this.avatarUrl = avatarUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    }
  },
};
</script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
