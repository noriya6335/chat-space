# README
## usersテーブル

|column|type|option|
|------|----|------|
|name|string|null: false,index: true|
|email|string|null: false,unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users


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
|name|string|null :false|

### Association
- has many :users through: :group_users
- has many :group_users
- has many :messages

## group_usersテーブル
|column|type|option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
