<p align="center"><img src="picture.jpg" width="100" height="100"></p>

<h1 align="center">Kyriel Otakudesu API</h1>

<p align="center">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/NanoXyinDev/KyrielApi-OtakuDesu">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/NanoXyinDev/KyrielApi-OtakuDesu">
<img alt="GitHub" src="https://img.shields.io/github/license/NanoXyinDev/KyrielApi-OtakuDesu"> 
<img alt="GitHub stars" src="https://img.shields.io/github/stars/NanoXyinDev/KyrielApi-OtakuDesu">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/NanoXyinDev/KyrielApi-OtakuDesu">
<img alt="GitHub watchers" src="https://img.shields.io/github/watchers/NanoXyinDev/KyrielApi-OtakuDesu">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/NanoXyinDev/KyrielApi-OtakuDesu">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/NanoXyinDev/KyrielApi-OtakuDesu">
</p>

**Unofficial API of** : https://otakudesu.blog/ </br>
**Api Documentation** : https://NanoXyinDev.github.io/KyrielApi-OtakuDesu/ </br>
**Rest API** : https://kyrielapi-otakudesu-kappa.vercel.app/api

## Usage
1. Clone this repository
```bash
git clone https://github.com/NanoXyinDev/KyrielApi-OtakuDesu.git
```
2. Install packages (use `yarn` or `npm`)
```bash
npm install
```
3. Start server
```bash
npm run dev
```

## API Documentation
__Api Path__ : https://localhost:3000/api/</br>
__API Version__ : v1

| Endpoint | Params | Description |
| -------- | ------ | -----------|
| /home | - | Homepage |
| /complete | - | Complete/Finished Anime |
| /complete/page/${page} | pageNumber | Complete Pagination |
| /ongoing | - | Ongoing Anime |
| /schedule | - | Schedule Anime |
| /genres | - | Genre List |
| /genres/${id}/page/${page} | id,pageNumber | Show Anime by Genre |
| /search/${query} | query | Search Anime |
| /anime/${id} | id | Detail Anime |
| /batch/${id} | id | Detail Anime's Batch |
| /eps/${id} | id | Detail Anime's Episode |

## License
[MIT](https://github.com/NanoXyinDev/KyrielApi-OtakuDesu/blob/main/LICENSE)

## Disclaimer
This project is not affiliated with otakudesu.cam in any way. This project is just a wrapper, so I am not responsible for anything related to the content of the website.

## Support
If you like this project, please support me by giving a star ⭐️ for this repository. Thank you 😊
