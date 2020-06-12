# README
## usersテーブル

|column|type|option|
|------|----|------|
|name|string|null: false,index: true|
|email|string|null: false,unique: true|
|password|string|null: false|

### Association
- has_many :message
- has_many :groups_users
- has_many :groups, through: :groups_users


## messagesテーブル
|column|type|option|
|------|----|------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|column|type|option|
|------|----|------|
|group_name|string|null :false|

### Association
- has many :users through: :groups_users
- has many :group_users
- has many :messages

## groups_usersテーブル
|column|type|option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
