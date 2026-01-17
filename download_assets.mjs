
import fs from 'fs';
import path from 'path';

const outputBase = 'public/assets/products';

// Mapping of External URL to Local Path
const assets = [
    { url: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=2000", path: "vegetables/banner.webp" },
    { url: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800", path: "vegetables/potato.webp" },
    { url: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&q=80&w=800", path: "vegetables/yam.webp" },
    { url: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=800", path: "vegetables/onion.webp" },
    { url: "https://images.unsplash.com/photo-1507592476007-aa3755d496e5?auto=format&fit=crop&q=80&w=800", path: "vegetables/drumstick.webp" },
    { url: "https://images.unsplash.com/photo-1592394533824-9436d7a250eb?auto=format&fit=crop&q=80&w=800", path: "vegetables/green_pea.webp" },
    { url: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&q=80&w=800", path: "vegetables/sweet_potato.webp" },

    { url: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2000", path: "fruits/banner.webp" },
    { url: "https://images.unsplash.com/photo-1537640538965-1756cd5887e5?auto=format&fit=crop&q=80&w=800", path: "fruits/grapes.webp" },
    { url: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?auto=format&fit=crop&q=80&w=800", path: "fruits/guava.webp" },
    { url: "https://images.unsplash.com/photo-1603833665858-e61d17d8622c?auto=format&fit=crop&q=80&w=800", path: "fruits/banana.webp" },
    { url: "https://images.unsplash.com/photo-1587324046029-45e0f52382dc?auto=format&fit=crop&q=80&w=800", path: "fruits/lemon.webp" },

    { url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=2000", path: "iqf/banner.webp" },
    { url: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&q=80&w=800", path: "iqf/assorted.webp" },

    { url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000", path: "spices/banner.webp" },
    { url: "https://images.unsplash.com/photo-1615485925763-764f691b790a?auto=format&fit=crop&q=80&w=800", path: "spices/garlic.webp" },
    { url: "https://images.unsplash.com/photo-1596040033289-9610ae1936c6?auto=format&fit=crop&q=80&w=800", path: "spices/cumin.webp" },
    { url: "https://images.unsplash.com/photo-1615485290382-441e4d04e420?auto=format&fit=crop&q=80&w=800", path: "spices/ginger.webp" },
    { url: "https://images.unsplash.com/photo-1615485290341-2831b643a759?auto=format&fit=crop&q=80&w=800", path: "spices/turmeric.webp" },
    { url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800", path: "spices/chilly.webp" },
    { url: "https://images.unsplash.com/photo-1596040033292-3d85ee190a6e?auto=format&fit=crop&q=80&w=800", path: "spices/pepper.webp" },
    { url: "https://images.unsplash.com/photo-1596040033289-9610ae1936c6?auto=format&fit=crop&q=80&w=800", path: "spices/cinnamon.webp" },

    { url: "https://images.unsplash.com/photo-1515942661900-94b3d19f6acb?auto=format&fit=crop&q=80&w=2000", path: "pulses/banner.webp" },
    { url: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&q=80&w=800", path: "pulses/greengram.webp" },
    { url: "https://images.unsplash.com/photo-1585996328362-7935de9840ba?auto=format&fit=crop&q=80&w=800", path: "pulses/chickpea.webp" },
    { url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800", path: "pulses/dry_pea.webp" },
    { url: "https://images.unsplash.com/photo-1592394533824-9436d7a250eb?auto=format&fit=crop&q=80&w=800", path: "pulses/pigeon_pea.webp" },
    { url: "https://images.unsplash.com/photo-1614072895240-a1789c66c3c5?auto=format&fit=crop&q=80&w=800", path: "pulses/soyabean.webp" },
    { url: "https://images.unsplash.com/photo-1515942661900-94b3d19f6acb?auto=format&fit=crop&q=80&w=800", path: "pulses/lentil.webp" },

    { url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=2000", path: "cereals/banner.webp" },
    { url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800", path: "cereals/rice.webp" },
    { url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800", path: "cereals/wheat.webp" },
    { url: "https://images.unsplash.com/photo-1631553592818-80f488661734?auto=format&fit=crop&q=80&w=800", path: "cereals/sorghum.webp" },
    { url: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800", path: "cereals/barley.webp" },
    { url: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800", path: "cereals/corn.webp" },

    { url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000", path: "home/partner_bg.webp" },
    { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5afa?auto=format&fit=crop&q=80&w=2000", path: "about/header.webp" },
];

async function downloadImage(url, filepath) {
    const fullPath = path.join(outputBase, filepath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`Downloading ${url} -> ${fullPath}`);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
        const buffer = await response.arrayBuffer();
        fs.writeFileSync(fullPath, Buffer.from(buffer));
        console.log(`Saved ${fullPath}`);
    } catch (e) {
        console.error(`Failed to download ${url}: ${e}`);
    }
}

(async () => {
    for (const asset of assets) {
        await downloadImage(asset.url, asset.path);
    }
})();
