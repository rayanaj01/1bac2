function readMore(postId) {
  const postContent = {
    post1: `
      <h2>Mon premier article</h2>
      <p>Ceci est le contenu complet de mon premier article. Vous pouvez y ajouter plus de texte pour le rendre plus détaillé.</p>
    `,
    post2: `
      <h2>Mon deuxième article</h2>
      <p>Voici le contenu complet de mon deuxième article. C'est un exemple de texte pour illustrer comment vos articles peuvent être affichés.</p>
    `
  };

  const fullPostSection = document.getElementById("full-post");
  const postContentDiv = document.getElementById("post-content");

  postContentDiv.innerHTML = postContent[postId];
  fullPostSection.style.display = "flex";
}

function closePost() {
  const fullPostSection = document.getElementById("full-post");
  fullPostSection.style.display = "none";
}
