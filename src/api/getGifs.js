export const getGifs = async (category) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=K8Rs1hpt0EpEADC8tfxnzqOEDedIedbF&q=${category}&limit=8`)

  const { data } = await response.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }))

  return gifs
}