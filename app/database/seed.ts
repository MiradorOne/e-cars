import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const base64Img = {
    data: "data:image/png;base64,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4K20j3K6lTbOtgkQIECgSgH53irbdrlpA29l/ZPTraxhtkuAAAECTQnI99bZTgNvRX2T062oWbZKgAABAs0KyPfW11oDbwU9k9OtoEm2SIAAAQLhBOR762m5gbfgXsnpFtwcWyNAgAABAi8LyPeWfxQMvAX2SE63wKbYEgECBAgQ2CMg31vuETHwFtYbOd3CGmI7BAgQIEBghIB87wisjJcaeDNiX7eUnG4hjbANAgQIECAwg4B87wyIMz7CwDsj5pRHyelOUXMPAQIECBCoQ0C+t4w+GXgX6oOc7kLwliVAgAABAgsIyPcugL6xpIF3AX853QXQLUmAAAECBBYWkO9drgEG3oz2croZsS1FgAABAgQKFZDvzd8YA28GczndDMiWIECAAAEClQnI9+ZrmIE3obWcbkJcjyZAgAABAo0IyPemb6SBN5GxnG4iWI8lQIAAAQINCsj3pm2qgXdmXzndmUE9jgABAgQIBBKQ703TbAPvTK5yujNBegwBAgQIECDQyffOewgMvAd6yukeCOh2AgQIECBA4EoB+d55DoeB9wBHOd0D8NxKgAABAgQIDBKQ7x3EdO1FBt4JhnK6E9DcQoAAAQIECBwkIN87nc/AO8JOTncElksJECBAgACBJALyveNZDbwDzOR0ByC5hAABAgQIEMgqIN87nNvAu8dKTnf4YXIlAQIECBAgkFdAvneYt4H3Cic53WEHyFUECBAgQIDA8gLyvdf3wMC75SOnu/yH1g4IECBAgACBaQLyvbvdDLwvu8jpTvtguYsAAQIECBAoT0C+99GeGHi7rlsfips3b3bn5+fd0dFReSfXjggQIECAAAECIwTW+d579+6t5puzs7MRd7d1aeiBV063rcOsGgIECBAgQODVAvK9XRdy4JXT9csBAQIECBAgEE0gcr431MArpxvto61eAgQIECBAYFsgYr43zMArp+sDT4AAAQIECBB4SSBavrf5gVdO10ebAAECBAgQILBbIEq+t9mBV07XR5sAAQIECBAgMEyg9XxvcwNvtFf0w46xqwgQIECAAAEC+wVajYA2NfC22qT9x9MVBAgQIECAAIF5BFp8edjEwCunO88B9xQCBAgQIECAwFqgpXxv1QOvnK4PJQECBAgQIEAgrUAL+d4qB94WX7WnPaqeToAAAQIECBA4TKDm6Gh1A2/N2IcdM3cTIECAAAECBJYVqPWlYzUDr5zusgfc6gQIECBAgACBtUBt+d7iB9416MOHD7vz8/Pu9PTUaSNAgAABAgQIEChAYDPf289pJycnBezq1VsoduCt9ZV5kV22KQIECBAgQIBAQoHSI6dFDryloyU8Lx5NgAABAgQIEKhSoOSXlUUNvHK6VZ5vmyZAgAABAgQIXAqUmO8tYuCV0/UpIUCAAAECBAi0JVBSvnfRgbfkV99tHTnVECBAgAABAgSWESghqrrYwFtC8cu03aoECBAgQIAAgVgCS7/kzD7wyunGOuCqJUCAAAECBAisBZbK92YbeOV0HXYCBAgQIECAAIFeIHe+N/nAu/QrbMeKAAECBAgQIECgTIFcEdekA2+uIspsoV0RIECAAAECBAjsE8jxcjTJwLuZ0724uOiOj4/31ernCRAgQIAAAQIEAgukzPfOOvDK6QY+pUonQIAAAQIEmhL45S9/2b3tbW97VU1f+MIXuk9/+tOrf//FL36x+8xnPrP6+1/84hfdW9/61svrf/jDH3Yf/OAHV//8gx/8oPvABz4wyGed7/3973/fffe73+1+9KMfdTdv3lzde90z//jHP3bvf//7u9/+9rfdRz/60e5rX/va5UvXWQbeHK+iBwm5iAABAgQIECBAIIlAP1B+/OMf777xjW90b3jDG7p+IO4H3n4I/cMf/nD59/1wunltv5nN+4Zs7t69e9373ve+7sGDB913vvOd7k1velP3pz/96fI528984YUXuk984hPd29/+9u4973nP5d+vh+yDB1453SFtcw0BAgQIECBAoF6BzYFyPUT2w27/o3/bu/75D33oQ6u3vP0Q/POf//zyLWt/7etf//rBb3n7+3/yk590//znP7uvfOUr3Ysvvtj96le/6n73u9/tfOauYfz73//+5bWTB1453XoPrZ0TIECAAAECBMYIbL7N7d/gbg/A2/+8OQz366z/+ZOf/OTq7Wv/Yx056Ifbfjjt/7p+O/y9732ve9e73tV99atfXf37k5OT7lOf+lT33//+t+sjFaenp5fP7Afu7f1t//PogVdOd8zxcC0BAgQIECBAoG6BXW93t9/orofa9Vvc7Te6/dD65z//+ZG3wX384C1vecur4g79ve985ztXaOvIRD8I939/+/btVa74xo0b3c9+9rPur3/96+qZ/YC7+Ua3f+P7uc99rvvWt761GqIHD7xyunUfVrsnQIAAAQIECEwR2I4L9M84ZODt79/8A2abf6CtH1x/+tOfXg6x2wPveqDuI7X9W+D79+93X/7yl7tf//rXhw+8crpTjod7CBAgQIAAAQL1C2y/Pd0cePu3tH2md2ikYf3dHdZvb5955pnLaEP/jM9+9rPdRz7ykVf9obj1G97+vvUzPv/5z3f//ve/V98J4i9/+Uv37W9/+zIWMSrSIKdb/yFVAQECBAgQIEDgEIHtPO76WZuxhV1/aG0dYVgPt5t/aK0fSD/2sY91Z2dn3Yc//OHV0Lz51ndzv29+85u7H//4x91vfvOby1jE5jP778rQf0u0r3/96903v/nN1R+O2x7Sd0Ya5HQPORbuJUCAAAECBAi0IbArurCubOq3Jeu/5Vg/4PZvam/dunXltyzbfkt73bc66/fZD9BvfOMbu3e/+92rt8bveMc7Lr8rxCMDr5xuG4dTFQQIECBAgACBOQQ2h9PN/6nE5lveMf/jifXz+metownb36Vh10A99n888d73vrf70pe+1L3uda/rjo6OXvlDa4899tjqH/oHnp+fr37SDwIECBAgQIAAAQK1CWy/xO2/j+9rnn766f/1A+4TTzxh0K2to/ZLgAABAgQIECCwU6AffJ977rmu/+v/AVwDvqqON56AAAAAAElFTkSuQmCC",
  };

  await prisma.postCategory.deleteMany();

  await prisma.postCategory.upsert({
    where: { name: "review" },
    update: {},
    create: {
      name: "review",
    },
  });

  await prisma.postCategory.upsert({
    where: { name: "guides" },
    update: {},
    create: {
      name: "guides",
    },
  });

  await prisma.postCategory.upsert({
    where: { name: "news" },
    update: {},
    create: {
      name: "news",
    },
  });

  await prisma.postCategory.upsert({
    where: { name: "ranking" },
    update: {},
    create: {
      name: "ranking",
    },
  });

  await prisma.postCategory.upsert({
    where: { name: "other" },
    update: {},
    create: {
      name: "other",
    },
  });

  await prisma.post.deleteMany();

  await prisma.post.create({
    data: {
      title:
        "2023 Nissan Altima 2.0 SR Review: A Sensible, Somewhat Sporty Sedan",
      body: "This is my first post. I'm excited to start blogging!",
      image: base64Img,
      featured: true,
      tags: ["blog", "javascript"],
      category: {
        connect: {
          name: "guides",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "2023 Ford Mustang GT Review",
      body: "The 2023 Ford Mustang GT is a classic American muscle car with a powerful V8 engine.",
      image: base64Img,
      featured: true,
      tags: ["cars", "Ford", "Mustang"],
      category: {
        connect: {
          name: "review",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Electric vs. Gasoline Cars: Pros and Cons",
      body: "In this article, we compare the advantages and disadvantages of electric and gasoline cars.",
      image: base64Img,
      featured: false,
      tags: ["cars", "electric vehicles", "fuel efficiency"],
      category: {
        connect: {
          name: "review",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Top 10 Sports Cars of 2023",
      body: "Explore the latest sports car models of 2023, from fast acceleration to sleek designs.",
      image: base64Img,
      featured: true,
      tags: ["cars", "sports cars", "luxury"],
      category: {
        connect: {
          name: "ranking",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Maintenance Tips for Keeping Your Car in Top Shape",
      body: "Learn how to maintain your car to ensure it runs smoothly and lasts longer.",
      image: base64Img,
      featured: false,
      tags: ["cars", "car maintenance", "tips"],
      category: {
        connect: {
          name: "guides",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "The Evolution of Electric Vehicles",
      body: "Trace the history and development of electric vehicles from their inception to modern EVs.",
      image: base64Img,
      featured: true,
      tags: ["cars", "electric vehicles", "history"],
      category: {
        connect: {
          name: "other",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Comparing SUVs: Size, Price, and Features",
      body: "Explore the differences between various SUV models, including size, price, and features.",
      image: base64Img,
      featured: false,
      tags: ["cars", "SUVs", "comparison"],
      category: {
        connect: {
          name: "review",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "The Future of Autonomous Vehicles",
      body: "Discover the potential impact of autonomous vehicles on the future of transportation.",
      image: base64Img,
      featured: true,
      tags: ["cars", "autonomous vehicles", "future"],
      category: {
        connect: {
          name: "news",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Classic Cars: Timeless Beauty and Value",
      body: "Appreciate the beauty and enduring value of classic cars that have stood the test of time.",
      image: base64Img,
      featured: false,
      tags: ["cars", "classic cars", "vintage"],
      category: {
        connect: {
          name: "guides",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
