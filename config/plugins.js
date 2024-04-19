module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dvooj5gnz',
        api_key: '125574725271127',
        api_secret: 'q5HMEFm8EyuzVyZwUv7197JUhE0',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
