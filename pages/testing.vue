<template>
  <div>
    <div class="mt-16"></div>

    <!-- {{ blogPosts.items }} -->
    <div v-for="(post, index) in blogPosts.items" :key="index" class="my-4">
      <div>{{ post.fields.category }}</div>
      <div>{{ post.fields.title }}</div>
      <div>{{ post.fields.summary }}</div>
      <div>{{ post.fields.link }}</div>
      <div>{{ post.fields.thumbnail.sys.id }}</div>
      <div>{{ post.pic[0].fields.file.url }}</div>
      <!-- <BlogPostCard
        :url="post.pic[0].fields.file.url"
        :topic="post.fields.category"
        :title="post.fields.title"
        :content="post.fields.summary"
        :link="post.fields.link"
      /> -->
    </div>
    <TheBlogCarousel :blogposts="content" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const baseUrl = 'https://cdn.contentful.com'
    const content = []
    const blogPosts = await $axios.$get(
      baseUrl +
        '/spaces/7jrebygxgm3y/environments/master/entries?access_token=CkUOaYq5I8jhprtC4I4jSOQVyELnaaRMn9FKsMlDFm4&content_type=blogPost'
    )
    blogPosts.items.forEach((post) => {
      const pic = blogPosts.includes.Asset.filter(
        (pic) => pic.sys.id === post.fields.thumbnail.sys.id
      )
      post.pic = pic
      content.push({
        url: post.pic[0].fields.file.url,
        topic: post.fields.category,
        title: post.fields.title,
        content: post.fields.summary,
        link: post.fields.link
      })
    })
    return { blogPosts: blogPosts, content: content }
  }
}
</script>

<style lang="scss" scoped></style>
