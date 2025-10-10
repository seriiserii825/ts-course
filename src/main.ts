type UserId = string & {__brand: "user_id"};
type PostId = string & {__brand: "post_id"};

function getUserId(id: UserId): UserId {
  return id;
}

const user_id = 'user_id' as UserId;
const post_id = 'post_id' as PostId;

getUserId(user_id)
getUserId(post_id)
