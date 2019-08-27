import axios from 'axios';

const deletePost = async (_, args) => {
  let message = '';
  let success = false;

  try {
    const result = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${args.id}`);
    if (result.data) {
      message = 'Berhasil mengapus data';
      success = true;
    }
  } catch {
    message = 'Gagal menghapus data';
  }

  return {
    message: message,
    success: success,
    id: args.id,
  }
};

export { deletePost };