<script setup lang="ts">

</script>

<template>
  <GlobalWelcomeSection titleText="プロジェクト" descriptionTextHtml="<p>プロジェクト一覧<br>このページではBernic Studioのプロジェクトをまとめています。</p>" />
  <GlobalSectionWithSlot titleText="ウェブ関係">
    <GlobalCard titleText="Bernic Studio（ウェブサイト）" descriptionTextHtml="<p>Bernic Studioのホームページ。<br><a href='https://github.com/bernic-studio/bernic-studio'>Github</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="Wiki関係">
    <GlobalCard titleText="Bernic Studio Wiki" descriptionTextHtml="<p>Bernic StudioのWiki。<br><a href='https://bernic-studio.notion.site/b712c50a26094da7acb45364b0fa0fb4?pvs=4'>Notion</a></p>" />
  </GlobalSectionWithSlot>
</template>