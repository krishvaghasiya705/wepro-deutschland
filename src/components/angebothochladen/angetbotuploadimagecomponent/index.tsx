import React from "react";
import styles from "./Angetbotuploadimagcomponent.module.scss";
import Crossicon from "@/assets/icons/crossicon";
import Uploadicon1 from "@/assets/icons/uploadicon1";
import Uploadicon2 from "@/assets/icons/uploadicon2";

export default function Angetbotuploadimagcomponent() {
  return (
    <>
      <div className={styles.Angetbotuploadimagcomponentmain}>
        <div className={styles.Angetbotuploadimagcomponent}>
        <div className={styles.Angetbotuploadimagdiv}>
          <div className={styles.Angetbotuploadimagdivicon}>
            <Uploadicon1 />
          </div>
          <span>Bild hochladen</span>
          <input
            type="file"
            accept="image/png image/webp image/jpg image/jpeg"
            title=""
          />
        </div>
        <div className={styles.Angetbotuploadimagcomponentblank}>
          <div className={styles.Angetbotuploadimagcomponentblankicondiv}>
            <Uploadicon2 />
          </div>
          <input
            type="file"
            accept="image/png image/webp image/jpg image/jpeg"
            title=""
          />
        </div>
      </div>
      </div>
      {/* <div className={styles.Angetuplodedimagedivmain}>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img
            src="https://s3-alpha-sig.figma.com/img/09fe/b2d3/3bb123340640f4eec533dfb34fe37d96?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e9YwsMjnqwerJrWOsda579XCBF-RbYxHWUJ~hYrSUOZA9qlHtaUFGl2e2F57JEAW5WaVOpcRz1gyFfkc0Pq3jz7KQVtymgni8ZFD~GWgtY64IBI~HqabR9YDmkwy7jVrSpXxOCby8N5AyD1vsK9mHGb~U9r4Fmr-If0hANxoMkeDK7huS0fX526uYvNFeYVmTJcWUCwHVvG0KEDm0huJRe4CxjNQfBAceljElSE0UZV5dmMyo7SOE1QftxGhsNLs4yvzwMx4qbVGXQvlqrIWZGe~083g9kh8WrZpcTLqkmV0JkP9OLNrw7Yaa9Cohf8O4KjIiR5yNhl8Pk2uqQQevA__"
            alt="Uploadedimage"
          />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img
            src="https://s3-alpha-sig.figma.com/img/dc49/f206/b1ce6422391d77b00f7ffe4aa4cd8520?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FLvt-iBD6zax1fEAQ8LjpRREL0xtJ0m5qk75v2FSvLWQ5MkWqxLcL7YH30PmLckamBYaa~ErRDKBL1UEZlMfvGIwspHT0jhyMfkBIv2-6OQKvUwEj8fbx3Dz9cExGfckc7Q4iQhtAem2lWU3Fewon0HfsacTSbSmaorEqqGjoyIx~ZJKbuuUgewS-4jAAzY90nijLuTuL5EsxUb3ng4Z2hloX5XfhvQrTYDgAQxB8YEZU25GqFwV-or~CaT85CT0pTn4lWHFjnc8ITslsV4tIYyl909AqyIftTGukfrpKJi4sImdhq-WSZhr~B4RNwYzY8Zk1sNcszseh-N27PR0Hg__"
            alt="Uploadedimage"
          />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/64ba/222d/bc4e73c6bdca12e6ce7e70d4c52e60c7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DWYD6ek3iXD9lwWtslpCa3E-6oMCGdrzjXGyyC0sGg39CRe8xduXKI8evqwem0QoxExtCAC9QIX0uFY0G8u2oxEPxzcJCiPK1wfly9rNHEFRMPbqrkliXJ0cPIZHordcS4nH6eIldeQg4uC69C4VjgwQt3j9azOYvH1o5rdStL5Ax0bCwupSI0KbQhKLAs8yN8wD3LbzGIVCJHGjrjuw6hRpTcOpx0ElMBMmlC488XwUL4pM5ixGvzRorLkZ21GNYEoFMxciwoLUxMxkdpBqXkhJ9pwle2Gek5e06tL4rYBs3LO59yzlK-O4x66KJ9COGv834BJ51KlEVFjkCy5aOA__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/2334/a857/07ec738ab5190c467e097347eb7437d2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IMz5H7CGUUULnhxmPT15JmoWRMG78TjTwLYMMWleM5G2ZVrmtc3W3DEaDgJGa3Mp1T-IdiM6oaomWQyn6snw1MYyWENk0N4~mss9d-AW98SQ4387Id~lSdi92PSaOpQfBQlJkahgRGNs1dl1d43V2efu3rNDef-9VKS2-dyK~~ciOYeyYOBUsDL5oukTL2bPpiSoYgMNBNt8Q4F7nzkpGMjWTE5SCdqQTJuOzd66Ct6wEM41qjoZ5Dwr5PhmeDpP69ttvnnjaNOOYNYZhMCr7J1pPHVdTfYjcZNG8zwJy52tx2dfbhb66Maot2Q~i5CiR8jAzvfHcIXLcxiEEIe9wA__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/3117/288e/28b26d12b5484ece6dba4c353d1a8719?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AULLfP5xWM4tKNpMt5RXj-ehv9alV54rTdLnHxGU0P0zyt7J7WW63nKThYGIyjZoaBet6RIrTc3CSSHLf0M7YpB662izl6Vb9xR-SOMGzoZ-s2CWqOzLmd9sHTbj9uW5TurzYNidaHKi6yRlG~0BHcLMnN~aMNKoFOhZ-bIaCjZ6ceZDYEongxFe9ERLU4go~RccXHrMjWm6XS0zCRbmAaoIazgGqKoOMY7V0iYTJ79GZwCLgiVLs2suFbBnnCPMS3YkmE63r7XK3yi-vhPfyHgfkjYzOW6O0869suvCz4juotS2ANqNx~W1TxdNPNZcRR4JCxNFRbJ~5RS57C7xyg__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/d5c3/478d/f9b006bb6a57c314d8d51405212b7ec5?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UQJCkRwrfGZy7SjYoIH7-cUVx0SmArknXEva7Z9enzHOClK~kMU2b-pvnDcV~IO4hFoBI1AvlxcNa0y-oTzM1d8JYNvJdKFsjyKvHF2u2XwCl2QtTh7xEVF6uES-Kzfk4aPebKGO9Axqgyy~wp9bCJ2T0wqMO9UCW~Jo5USaG4UZ~ATvbikBWyetMA0RmCfN~W18uBZpCdcVscjDYa6jwsvLXmatGQYTSloAiqdU66JoOSzy0UyqmfA6wUCiey~D~HOMZ9E6YBfprlff8xsy~IABrzt1oYpdOiCVEC2fBs6sgu-~JPCqRiV3O3vyn78wsBvehXYMSTbZ~Gqd5e0Wng__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/be01/8769/bf0f7fef68bc66086d43727dfc3d1fbc?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nHRWsIfKF~jHO0X3BB4Wpgd~XdVJucl6157KnRSOM3OnFwcYWHT4e7kj4DGThqldbycEB9CibQ6Sb9q4IvLOPppSWrbKSHdNTo6E-3iGeYe0sfiqXjPgSXECVpmm2gBBf9XjkJ~UHFJt-l4HTrpV~ArWHO~TA7iUdvyEnti8WTwrR5k02TETNQDCT4iWPvyxli5oenu06nbFFV75MmsRsmFpwXUshERukL8IpHLU~tRk5mEx7Kp8Zfu3Z9qP2y593GLbMnd4AfrougASl9c4OVAC-V72xbAC5CCANzGhqm3MzmqEx29cGtusX1mmqPQ9GVNzvupbsTr0sr1yRVSePQ__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/00e6/54b9/faa06e920096518a41612a10fcdff407?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bn5jlQMww76A94iaXiuZFNUghqyx385XYPHiW-uQFmAkV925guh7I8KI4nHbevQaK1~Bk~AhwVvHCMqz3IgJwjWIwmIUYZoBwtm19mr8kD-qGTWvekMIZ4b0~ICIgksFBqYDkdS0qbcLFU2jC6MNsnu35o~DBdKm9f0MTlIB~KuvbdGbnsWdKiaJ9tnCR5myrdK~CGzZn0kzfAGByEdqEkAoDaH~Y9dJPf4a3UzcSHWl379R5AkA3uXmfn8Nw8KFg4eHeoDAR8bYm9ev2SbO3K~3zwEXdnkve5o4HfWYmjCGitbl5CnUyaopotN4p6VTuwZHUwVTn7iMo-Tpkgz0Vg__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetuploadedimagepreviewdivmain}>
          <img src="https://s3-alpha-sig.figma.com/img/456e/fcda/5bf85eeeb3caea4c592c55a2d3343980?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D1aQXgFKk9abEe-DLhBBVvdn1UnLSsPZY6LUzM-qZPrSbBe69pJ9Cpz2TzQMsjO8Pr-SflAOueMLwc-w42P5Nq~eBZTwSy1i3VH2ugQE0YkKq4Y9PFz4EAAJxnwc6ODBsU3pT1JzFeH8cA2sbcfkRUdFD7CXgAiHIT5~oAJkDBhnTVKodlizYXD7N8a1VErOdDVtOSy68J-VhcQ05PojBpxQeHEdRK9KZSUZJzjkg8s5ze8YONwJ-HBeLOei9q7rhm61jsTrqx9yh1cNd5ZvBqOw1zWb29AU0u208o50x1ZxENabUEEq9SsqxlZD9y8h3KVcvn1n4PBMlLbaDA-5EQ__" alt="Uploadedimage" />
          <div className={styles.Angebotuploadedimagedeleteicondiv}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.Angetbotuploadimagcomponentblank}>
          <div className={styles.Angetbotuploadimagcomponentblankicondiv}>
            <Uploadicon2 />
          </div>
          <input
            type="file"
            accept="image/png image/webp image/jpg image/jpeg"
            title=""
          />
        </div>
      </div> */}
      <p className={styles.Maximalpera}>Maximal 10 Bilder</p>
    </>
  );
}
