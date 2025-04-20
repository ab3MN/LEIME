export const isImage = (url: string) =>
  new Promise<boolean>((resolve) => {
    const img = new Image();

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
