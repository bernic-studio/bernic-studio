<script setup lang="ts">

</script>

<template>
  <GlobalWelcomeSection titleText="プロジェクト" descriptionTextHtml="<p>プロジェクト一覧<br>このページではBernomixのプロジェクトをまとめています。</p>" />
    <GlobalSectionWithSlot titleText="特殊">
      <GlobalCard titleText=".github" descriptionTextHtml="<p>Bernomixの説明文<br><a href='https://github.com/bernomix/.github'>Github</a></p>" />
      <GlobalCard titleText=".bernic-studio-contents" descriptionTextHtml="<p>Bernomixの画像素材ならなんやら<br><a href='https://github.com/bernomix/.github'>Github</a></p>" />
    </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="ウェブ関係">
    <GlobalCard titleText="Bernomix（ウェブサイト）" descriptionTextHtml="<p>Bernomixのホームページ。<br><a href='https://github.com/bernomix/bernomix'>Github</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="ソフトウェア">
    <GlobalCard titleText="Note" descriptionTextHtml="<p>モダンなUIのメモ帳<br><a href='https://github.com/bernomix/note'>Github</a></p>" />
    <GlobalCard titleText="Trans" descriptionTextHtml="<p>音訳ソフトウェア<br><a href='https://github.com/bernomix/trans'>Github</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="Wiki関係">
    <GlobalCard titleText="Bernomix Wiki" descriptionTextHtml="<p>BernomixのWiki。<br><a href='https://bernomix.notion.site/Bernomix-Wiki-73cd87a7f6a74d11900bba37e83e9c01?pvs=4'>Notion</a></p>" />
  </GlobalSectionWithSlot>
</template>