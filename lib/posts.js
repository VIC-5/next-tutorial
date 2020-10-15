import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getStoredPostsData() {
    // /posts配下のファイル名を取得
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // idを取得するためにファイル名から".md"を削除
        const id = fileName.replace(/\.md$/, '')

        // mdファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // 投稿のメタデータ部分を解析
        const matterResult = matter(fileContents)

        // データをidと合わせる
        return {
            id,
            ...matterResult.data
        }
    })

    //投稿を日付でソート
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}