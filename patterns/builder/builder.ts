enum ImageFormat {
  Png = "png",
  Jpeg = "jpeg",
}

interface IResolution {
  width: number;
  height: number;
}

interface ImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  addPng() {
    if (this.formats.includes(ImageFormat.Png)) {
      return this;
    }
    this.formats.push(ImageFormat.Png);
    return this;
  }

  addJpeg() {
    if (this.formats.includes(ImageFormat.Jpeg)) {
      return this;
    }
    this.formats.push(ImageFormat.Jpeg);
    return this;
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  build() {
    const res: ImageConversion[] = [];
    for (const r of this.resolutions) {
      for (const f of this.formats) {
        res.push({
          width: r.width,
          height: r.height,
          format: f,
        });
      }
    }
    return res;
  }
}

let builder = new ImageBuilder();
builder
  .addJpeg()
  .addPng()
  .addResolution(120, 580)
  .addResolution(350, 750)
  .build();
console.log(builder);
