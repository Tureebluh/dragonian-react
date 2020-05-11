import React, {Component} from 'react';

class Icon extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  render () {
    return (
      <>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1366 768"
      className={this.props.className}
    >
      <defs>
        <filter
          id="a"
          width="32"
          height="28"
          x="539"
          y="135"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="b"
          width="32"
          height="28"
          x="483"
          y="267"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="c"
          width="31"
          height="28"
          x="678"
          y="90"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="d"
          width="32"
          height="28"
          x="674"
          y="455"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="e"
          width="32"
          height="28"
          x="837"
          y="267"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="f"
          width="32"
          height="28"
          x="539"
          y="409"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="g"
          width="32"
          height="28"
          x="781"
          y="135"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <filter
          id="h"
          width="32"
          height="28"
          x="781"
          y="409"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg"></feFlood>
          <feBlend in="SourceGraphic" in2="bg"></feBlend>
        </filter>
        <mask
          id="i"
          width="32"
          height="28"
          x="539"
          y="135"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#a)">
            <image
              width="32"
              height="28"
              transform="translate(539 135)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADw0lEQVRIS8VX25KqOhBdIITITVCcy/9/3EyNW0IgXANyHqbSJYrjnIddu6u6FAjp1enOWsECMOMfmv1swN8259kAAHBdF5xzcM7hOA42mw1s24ZlWQCAeZ4xzzOmacI0Tej7Hm3bou/7JzP/EkAURTgcDoiiCJxzMMbgOA5s+3sBTfBxHNF1Hdq2RVmWOJ/PUEr9OPdTAHEc4+3tDVmWIY5jhGEIz/Pgui42mw0sy6LMh2FA27ZQSsH3fdi2jWma0Lbtw/l/BBAEAd7f3/H6+oosy5AkCaIowna7BWOMAFwuF8q+aRqUZQnGGOZ5pnI8sh8BpGmKLMuQZRleXl6QpimiKILv+/A8bwFAa422bVHXNT0z/aCUQlmWqzEeAojjGMfjEYfDAVmW4XA4YL/fI4oiBEEAz/PgOA6VQGuNruuglILrurAsi+4VRfH/ASRJgjRNkaYpkiQh3+12dwAulwvV3wS/vielRFEUkFLexVkFEMcxsiyj4LvdbuG+72O73d6VwOyOeZ6pJ5RSSNMU+/3+9wBMtnEcI45jRFFEHgTBYidYloVxHKG1pm2ptUbf92iaBrvdjnqpKAoIIX4GEMcx7fkwDOH7PmW83W7h+/6ClK5XAAAtfdd1BDaKIiRJguPxSDyxCoBzvmg0E9TzPHieB8YYGGP0/xoAADDGqBRmHOeckgjDEGEYLgAstMBQ7nUwx3EWvtlsHvrt8+v3TBK+74Mxtg7Asizi+Ft/Ztdjbt8x17ZtEzhjixIMw4BhGDCOI3G7odm1azPx5XLBNE30u+bjOGIcR5p/FUDXdajrmpTs2odhgNYaWmsMwwDbtjHP86IJ+75fjDFu6Liua0gpqWHvAABAVVVQSkEphaZp0DQN2rZF27bU+Sb47TY0Hd40DelCXddExUIIVFW1iHcHQCkFIQSRThiGCIIAnHNSQAAYx/GOik2WJuh18LIs74KvAgAAKSXyPCceMOrnON/Dx3FE3/cPxUhKSfRbFAXyPIcQYlUPVgFUVYXPz08EQUB8YLI1wW+14FqMpJQQQkAIgTzPCciaPRSjPM9JehljFKjrulU5NtxvVkAIgfP5jNPphI+Pj9XlB56cBwwIQxxaa9R1Dd/34boulcSIj+H/siyR5zlOpxO+vr6Q5/nDGD8CqKoKp9MJjuPQ0cpowXVDGgBmy1VVBSkl/vz5cyc+t/b0TCilhOM40FqjqiqiVHMyBr4BmDL0fY+u62gVnh1KLfziw8SICuecqHTtWG6Y0BBQ13UL0lmzXwH4m/bPv4z+Az596uLapIAGAAAAAElFTkSuQmCC"
            ></image>
          </g>
        </mask>
        <mask
          id="j"
          width="32"
          height="28"
          x="483"
          y="267"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <image
              width="32"
              height="28"
              transform="translate(483 267)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADsUlEQVRIS8WX2W6rShBFl5nHYAiRovz/v0XKMZihmaf7EHULx1Puw9EpqeS2TXdtNlW7igOw8Q9Ne3bB3zbj2QUAtm3jOA62bWMYBpqmoWkah8MBgG3b2LaNZVlYloVhGOi6jmEYnpz8CwCO45CmKVEU4boujuNgmiaGYVwAWJaFeZ7p+56u66iqiizLEEI8PP8pgCiKSNOU19dXwjDE8zzFhK7rwDeAaZoYx5Gu6xBC4HkemqaxLAtd1909/yGAMAx5e3tTHkURvu/jui6WZanHsL/7tm0pyxLLsti2TT2Oe/YQQBzHpGmqAMRxTBAECoCu6wrANE10XUfTNNi2ja7rKh+EEFRVdTPGXQBJkvD+/k6apuoRJElCEAT4vq8AAKzrqgAIITBNk8PhwDzPdF1HURT/D0AYhnx8fKjAcRyTJAlxHBOG4QWAPQNt26rg67oq+suypCgKyrK8inUTwPF4JEkSkiQhiiKiKOLl5UX5PhHhm4FxHDFNE03T2LZN5UTTNMRxTBzHvwMQBAFxHF8EDcNQeRAEFwAk1beCB0HAy8uLyqWyLDmfz48B7AP6vo/necodx8F1XTzPw7IsxcCyLBdrWY6e5+H7PkEQcDweSdNU6cRNAJ7nqcCO4yj1sywLy7LU2jTNqxwA1O/7623bxnVdXNdVN3QTgK7rFyUm1U66ruvouo6maWotq0DulzK9/1/ul6Acx8EwDOZ5Bh40Iymz0rbtsmn+/P7M1nVV6/3ZioFlWWiahr7vGceRcRyZ51m5bDR7lwet66rU8OfnNE3Kx3Gk73umaboGANA0DXVd07Ytfd8rH8eRYRgYhkEln6x1mQMStAy039N1nRKptm33Ia+roKoqqqqirmuapqFtW5qmueiEMrhpmgDqTmUvkJIs9wohKIqCLMuu+sIVgLquOZ/PxHFMVVUqc/d1L+m9pYRCCIQQKnBVVRRFwel0utKAmwAAtcHzPFVCsuz2QvNTCSXNVVUp+T2fz+R5flMF4Q6Auq75/PxUQiJLB77pHoZBdTy4bkYycFEUFEVBnucURXEr1P1umOf5ReORVPd9r5RQPgIJoO97hBCUZUmWZcpvUS/t4TwgQZimqaaepmnwPA/TNC8Y+DmQ5HnO6XTidDrdbcXwBEBd1/z58wfDMNRoJRNSTkRwPZLJRP76+rpLvbSnM2FZlhiGwTRN1HWtgj8aSiULWZZd1f1PO/CLFxM5ljuOc9ET4FtW92O5TFIpYs/sVwD+pv3zN6P/AIDn5wNkorejAAAAAElFTkSuQmCC"
            ></image>
          </g>
        </mask>
        <mask
          id="k"
          width="31"
          height="28"
          x="678"
          y="90"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#c)">
            <image
              width="31"
              height="28"
              transform="translate(678 90)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAAACXBIWXMAAAsSAAALEgHS3X78AAADsklEQVRIS8WX626jMBCFT7iaW8IlqFXf/+EqUcAYY+6wv2yZJKW7K63WkqVAbH8zY88ZcwGw4z8146cB/7JZPw2wbRuEEDiOA8dxYJomDMPA5XJRY/Z9x7ZtWJYF8zxjHEcMw4BlWU5W/g14GIbIsgxRFIEQAtd1YVmWMkAHSyhjDFVVoa7r07VP4WEYIs9z5HmOOI4RhiEIIbBtG5ZlKbj0eBgGcM7h+z5M08Q0Tei67tv1T+FJkiDPc7y/vyOOY1yvV/i+D9d1YZrmAT5NE4QQYIzBcRzs+w4hxN/B0zTF29ub8jxJEtxuNwRBcAi9HnLOOQghMAwD67qi73swxsAYe8l4CQ/DEB8fH8jzHPf7Hff7XcFl6PWwy0PmeR5s2wYALMsCIQQopX8GT5IEWZYhyzKkaYo4jpGm6RNc93wYBti2rd5N04S+78E5B2MMZVk+cZ7gURQhyzLEcay81XsQBMpD3XOZhgAOZ4Bzjq7r1LacwnVQGIaIoghRFCEMQwRBoDx3HOfgpQSv66q8vl6viOMYlFLcbrdzeBAESJLkAPN9H57nwfO8w2/dc7n/27Zhnmc1Vhp/vV6RpimapjkYcIBHUQTf9+H7vhIUqWyyy3dyz/d9P4DlGNd1QQgBIeQQNR2utN11XQWVi9u2rQTFsiyYpnno0oDHd/pc27bhOA4IIUojnuByspRN2QEcdPyxPf6nz71cLmo93UjZVNjXdcWyLFjXVXX9+fE/GfJ937GuK7ZtU2n33Rz5/AQfxxFCCPR9j77vMY4jpmnCNE0YxxHzPGOeZ3Wy931XBkiRmaZJjZHP4zii73sIISCEwDiOz3AA4JyjaRrEcYyu65QxwzBgGAaVXvu+H1JNFhVpuOx6njPG0LatjjvCu65DURQqPznn4JzD87yDiMhc1kVmGAZ0XafmcM7Rtq0qr0VRQAjxPRwA6rrG19eXEhm9iknwOI5PCicVrGkaMMZAKQWlVIGrqnpEvdb2uq5RVRXCMFSCoqvZd4VFhreua1BKUZYlyrIEpfQV5jW8aRoURYEgCEAIgWma2LZNHR5dZPSS2nUd2rZFVVUKXJYlmqZ5hfm+nlNKUdc1PM+DYRhYlgV936v9f7zJyELSti3qukZRFKdeAydwzjnKsoRt29i2DX3fq4uEfvhknk/TpA6djNzn5+dTMdHb6TWKUgrLsjDPMxhjav91JXx1gWzb9jTcsl3ww0eD67oq1PLgnV2d5cViGAbM83yy8m/A/2X7r18svwCQJgGPq7BDYAAAAABJRU5ErkJggg=="
            ></image>
          </g>
        </mask>
        <mask
          id="l"
          width="32"
          height="28"
          x="674"
          y="455"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#d)">
            <image
              width="32"
              height="28"
              transform="translate(674 455)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADyElEQVRIS8WX6W6jShCFP8DsmyE4ivL+LzeO2Xdj4P6IusfESzJXd3RLKlk2Tdfpqq5zygqw8j+a+t2Cv2277xYAmKaJZVmYpslut0PTNBRFQVEUuWZdV5ZlYZ5nzucz5/OZYRiYpunJzj8AYFkWSZIQhiGO42CaJoZhoGkaqvo7gfM8c7lcGMeRYRio65o0Tcnz/MnuPwAQhiFJkvDy8oLv+7iui2EYGIaBqqooisK6rkzTxDRNDMNA0zQURYGiKJzPZ9q2fbj/UwC+73M4HHh9fSVJEvb7Pa7rYtu2zAJ8pl+cvus6yrJE13Xmeabv+38PIIoikiQhSRIOhwNRFOF5nsyCuAvLsjBNE+M40jQNpmmiaRrzPDOOI3VdU5bl3RgPAcRxzNvbmwSQJAlRFG3KsNvtUBSFeZ5l+i3LYrf73HaaJvq+pyiKPwPg+z7v7++y9nEcE0URcRzfBbAsi7z1uq5vfuv7nqqqKMuSLMtuYt0FEIYhcRwTxzFhGBIEAfv9niAICIIA13Vlmq+DiYsp7sQwDHRdR1VVtG3LNE3Udf0cgOd5m8BBEMhTe56H53myHXVdB2BZFsZxRNM02RHjONK2LZ7nsd/vqaqKoii+ByACisvmOI5027axbRvHcW7ugOgI0Q1indgnCALCMCTPc7quuw/Asix5QsuyJPuJvjcMA13X0XV90wWCkK7XGYYh37VtG8uysG0b13U3ADZaYJqmpFtBucJVVb37XawT31VV3bhYL4Bfl+4GwE9sXVfW9beALsuyefbIHj3blEDwuKDVy+UiXXD9PM/SAdkF956Ld6dpkgI1juNGoDYABI+3bUvf9/R9zzAM0sdxlCVSFEUSjmjDax/HUX6K97uu29T/BgAgSaOqKgmm6zr6vpcsJ04taikk+DpI13W0bUvTNDRNQ1VVkg+eAmjbll+/fuF5niQd0RW6rm+I5isRfQ0qAhdFQZ7nVFX1Ndx9JkzTFN/3NwBE6q9Z7qsWCABlWVKWJUVRUBQFaZry8fFB0zQ3sR6KUZ7nZFmG7/s4jiPTLVjukRjVdS1PnGUZWZZxOp1I0/RunIcAyrLkdDrheR6WZclUC82/J8fiEpdlSZqm0u+JkLCn80Ce5wRBgGmawCfNtm17M5Asy7IRH6F8p9OJj4+Pu7UX9hRAXdccj0c5XHRdJ5VQKB8gBUh0Ql3XZFnG8XikKIpnIb6fCauqQtd1LpcLdV3fHUrXdZXEc52FNE1v+v6rKfzgj4kYyy3L2mgBIIfSaxDX5POd/QjA37Q/FqP/2v4Byq7uIWtnVSQAAAAASUVORK5CYII="
            ></image>
          </g>
        </mask>
        <mask
          id="m"
          width="32"
          height="28"
          x="837"
          y="267"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#e)">
            <image
              width="32"
              height="28"
              transform="translate(837 267)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVRIS8VXaY+jOBQsDoMThztI/f//XXdDAHPYYAj7YWQvSUgyu6PWWCpBkPVe+XhVLxaAFX9x2O8m/PRw300AAN/3QSmF7/twXReO48CyLIN1XbGuK67XK5ZlwTRNmKYJUkoopV7GfkuAUorz+YwoinA8HuH7PjzPg+M4sO1/N3BZFszzjHEcIaVE27YoyxJVVb2I/hsEoijC+XxGlmUIguCGhG3bZgeUUlBKQUqJrutQ1zUsy8I0Tej7/mn8lwSCIECe5wZxHIMxhsPhYHbBsixcr1ez+mEY0DQNCCFYlgVCiP9PIEkSZFmG8/mMPM+RJAlOpxMYYw8ElFIYxxFd18H3fTiOg2VZMI4j2rZF0zS7OZ4SiKIIeZ4jTVNzBGmaIggCQ8B13RsCUkpQSuG6v8IqpSCEQF3X/51AmqYGSZIYhGH4lIAQAoQQ822aJgghwDlH0zS4XC4PeXYJpGmKPM+RZRmSJEEURYiiCGEYIooiMMZMSQIwBAghsG3b3AkpJYZhAOccfd9DKYW2bV8TYIzh4+MDWZaZpEEQ4HQ6maeuBL1aXfu2bZuK0Lc/CALEcQzOOeq6fk8gDEMDnex4POJwOIBSCkopjsfjwxE4joN1XQ0ZIQQYY2CM4XQ6IQxDxHGMqqowDMM+AUqpueXbhL7vG3ieB0LIDYFlWQDAJPc8z0CrqAZj7IbAjRdsk7iua+A4zi5s275517+33x3Hgeu6IISAEAJKKQgh+wT2xrr+uVlqr9Dv23FzBOM4YhxHTNMEpRTmeTYavyzLA4BfFaBN6B7zPBvoi6lj7xLQOt73PaSUEEJASmkwjuPN7d+WoQ5+j3EcIYQwse5l+aEKOOcGcRyj73sTYCs0y7I8lOF2nvYADV2Gbwn0fY/Pz09TOoyxh7rXQrOtAqUUhmFA3/foug5t25pnXdeoqgqc8/t0+0pYliWCIDAEtsqna11K+SDFmoCW3qZpUFUVyrLE9/c3uq57yPXUC6qqwuVyMT2ATjbPM6ZpMo53b0a6F9CrLssSRVGgLMvdPE8JNE2DoigQBAEopUbjtefvmZG246ZpUJalwZ4J6fGyH6iqCmEYwvM8ADDb/Kwh0frPOcflckFRFCiK4qkVA28ItG2Lr68v01xofdcX8p6APgZ98Yqi+POekHMOQgjmeUbbtjgcDia5bkp1R7xtSjnnKMvyZTsGABZ+44/J1lC22m9ZlpmzVUQtQkIIzPP8IvJvEvjJ8daMfnr8A02CAFRE3kYNAAAAAElFTkSuQmCC"
            ></image>
          </g>
        </mask>
        <mask
          id="n"
          width="32"
          height="28"
          x="539"
          y="409"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#f)">
            <image
              width="32"
              height="28"
              transform="translate(539 409)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADu0lEQVRIS8WX6Y6jOhCFD/tuIAFF/f4P11KSZjHYmMXh/hjZgg7d6Tuj0ViyQoxd/rzUqcIAsOIfFvNVh79d7FcdAMBxHPi+D9/3Yds2LMuCaZowDEP3WdcVj8cDUkpM04RpmiCEwDzP31j+IQAhBKfTCUmSwPd9eJ63g1CTL8uCcRwhhEDXdfj4+EBd19/afglACMHlckFRFEjTFFEUwfd9OI4D2/41fF1XLMuCeZ4hhEDf92iaBoZhYJomMMa+tP8tQBRFeHt7w+VyQVmWyPMccRwjCAK4rgvbtmEYhl69moxSCsdxIKXEMAy/D5DnOYqiQFmWKMtSH0MYhvA87wlACAHGGDzPg2makFJiHEd0XYe2bQ/n+BKAEIKyLHE+n3E+n1EUhQaIomgHsK6r3v4gCHT7siwYhgFN0/x/gCzLkOc58jzXz1mW6XvgeR4cx9E7MM8zOOe7tmmaMAwDKKVo2xZVVT3NcwhACEFRFLtJCSFI0xRpmiIMw91KFYC6mOpSCiHAOQelFIwxzPOMruteA2RZhizLQAgBIQRJkiCOY8RxjCiKdp6wXa1p/tK1eZ4xjiMYY0iSBFmWgVKKpmleA2x9Po5jhGGoV7ytSpQUgGVZAKAvXhAEGjaOYxBCkGUZ6roG5/wYwPM8nE4nEEL0Kj3P09V1Xbiuq5+3AIZhQEqp+2z7KhX1fR9RFO0AdrHAdV09qTKgzlVVpYCWZelqmqZu+/zOsizYtg3HcbR9x3GOAQBoed3WPy3ruu5+t2V3BOryzPOspVVKqeuyLJBS6qCjANX/7bvPY6Zp2tk/BFBKxjmHEEIHlnEcMY7jzsj27JUbqj6fqxACQohDWX7yAiWblFKkaQrOOYZhwDAMCIJAu966rjs3VLCq7zAM4JyDMQbGmLb7EoAxhuv1iiRJkKapll7f9+G6LkzTxLqukFJqL5BSYp5nvULGGPq+R9/3OjhRSp804BAAAKqqQpIk2h2V9FqWpVVuHMcnJVQAagfbtkXTNKjrGnVdg1L6NNeXsUANUtFvu9ppmnQwArALRn3fo21bPb6qqt8LRpRS3O93xHEM3/dhmqY+a875YT6gLrEC+Pj4wO12w/v7++H2Ay/yAbUDrusCAJZlAeccYRgeZkQKjlKKqqpwu91wvV4Po6Aq3wJ0XYfb7QbbtvF4PDAMg74Prutq/VcA0zTpBKRpGtzv9z/PCVV6tSwLuq7bxQEV/Y6SUrULfd9/a9/ADz5MtgFlq/9Kptd1/e20/EcAf7P88y+j/wCQwfhZgIGPlwAAAABJRU5ErkJggg=="
            ></image>
          </g>
        </mask>
        <mask
          id="o"
          width="32"
          height="28"
          x="781"
          y="135"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#g)">
            <image
              width="32"
              height="28"
              transform="translate(781 135)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADvElEQVRIS8VX2Y6jOhA9MZsJEAIkrf7/vxsBAQMGDIbMQ8s1ZO2+uhpNSaUQY9c5tmtjB+CKfyjsuwl/W+zvJgCA53ngnMPzPNi2DcYYGGPY7XYAgOv1iuv1imVZsCwLxnHEOI5QSn1j+QcEOOc4nU6I4xj7/R6e58FxHNi2fUNgWRZM0wSlFPq+R9M0KIoCwzC8tf8tgTiOcTqdkGUZoigiErZtw7IsAF8E5nkm8LZtwTmH1vr/EYiiCOfzmfR4PCIIAvi+D8dxiMCyLATW9z2EEHBdl66jqqqXGG8JJEmCLMuIQJIkCMMQ+/0eruveEJjnGcMwQEoJz/PAGKNxrTXatn2K8ZJAHMc4n890/FmWIU1TugbXdWHbX8u3BNq2pXGtNcZxRNu2/51AmqbIsgxJkiBJEqRpekPA8zxYloXdbkcO2Pc9HMcBYwzrutJY0zSo6xpN0zzgPCWQZRk+Pj6QpimSJMHxeMThcCANgoAIAH9OwJyKccpxHNF1HW3iRwTCMMTn5yeyLCPgKIpu1FyB4zhEQCkFxtgNuJQScRwjjmNkWYaqqh5IPBA4HA60KIoiBEFA6vs+fN9/6gPb05imidaEYYgoisjuWwK+7yOKIoRhSGC+78PzPFLXdUm3PrAFN+/Nmv1+jyAI6PqklIR5UwvuAU3Gu1fLsmBZFr03/7e6ne84DlzXpQ2ak7shwBgjD75Xk3J3u93N8zO5n2PU2NnaAzZXYMJGaw2tNRWWZVmwrivWdX14NiBmzIzfq9aaEpJSCvM8PxIAQKl0GAYMw4BpmjBNE+Z5JlVKUSFa1xXAnzA0xs06pRSUUlQdjd2t3BAYxxFFUSCOY6RpCikl+r5H3/fkG1vwrecbILMB82xstG0LIQT6vn9NAADqukZZlkiSBHEc43A4QEoJzjlc1yVwrfVD6BlAKSXatkXXdei6DnVdo6qqp+n4aSY0C47HI8IwBOecGpFt1rtPxcMwoOs6CCHQNA2EEKiqCmVZIs9zdF33gPWSgLkKk/cZ+woYk+VeFaPtjquqwuVyQVEUKMvyGdTrYmSY+77/UN0459QPMMYockzuN9d4uVzo95W8JNA0DfI8B+cclmVhXVcopdB1HTUkJqbXdb3piIQQuFwuyPMceZ5DCPEK5n1DIoQA5xwAME0TpJQUDYYA8NWSmRg39V8IgaIoUNf1O4j3BKSU+PXrF7VWdV3fHP+2KTWRYWK+bVuUZfnU8bayww8+TDjnN3ngu7bcJKJhGKC1fmv7RwT+pvzzL6PfvH7tmpyXDfkAAAAASUVORK5CYII="
            ></image>
          </g>
        </mask>
        <mask
          id="p"
          width="32"
          height="28"
          x="781"
          y="409"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#h)">
            <image
              width="32"
              height="28"
              transform="translate(781 409)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAAAsSAAALEgHS3X78AAADrElEQVRIS8WX3W6rOhCFvwABEgIEQlqp7/9svdlJzD8xgeRcVOMDTZr27KOtbWlJ2BjP8nhmjVkAN/5is76b8Keb890EAM/z8H0fz/NwHAfLsrAsi8ViAcDtduN2uzGOI8MwoLXmfD6jtf5m5R8Q8H2fLMuI45j1eo3neSyXSxzHmREYx5G+79Fa07YtZVlyOBzouu7p+t8SiOOYLMvY7XaEYWhIOI6DbdsAjOPIOI7GeFVV+L7PMAz/j0AYhuz3e15eXsiyjO12SxAErFYrlsulOQZxfdd1tG1Lnue4rss4jpzPZ5RSX9p4SiBNU7IsI8sy9vs9SZKw2WxYr9e4rjvzwOVyoes66rrG8zxs2zbjwzBQVdVDG18SSNOU19dXQyDLMtI0nRFwnI/PpwTEOwDDMHA+n6mq6r8RCMOQt7c39vu9MZymKUmSEIYhQRDMPHC9Xun7nrZtWS6XLBaL2VhZluR5TlmWd7YeEthut+x2O9I0JY5jttstcRwTx/GMwNQDfd+buLjdbmb3dV2TJAlJkvyMQBiGxnAURURRxGazMZBMEAIShFprbNueGW+ahiiKiOOYNE1RSt2ReEhAsNlsCILAYLVaGUigwYcHpjvv+56u6wiCwJAWDz4lsFqtzA593zfwPA/XdfF9H9d1DaYE4CPopu9d18XzPFarFev1miiKCIKApmmMzVkt8DzPGBMX27Y9g+M4Znz6LP1Hc5fLpdlAGIYmdmYELMvCtm0jrwCLxWIGGfvdNl1HmqFyvV7pug6tNZfLhcvlYiRWcL1eGYbB9GVR6U/fSV8ga2qtGYbhngBgdFyInM9n+r43H0+fJdfhXyGazhNorem6jq7raJrmrjbcZUFZlpRlSV3XtG1rIJE/zX05MinBUgsETdPQNA11XZPn+cPqeEegqiqUUux2O8qyNJErGSA7v1wusywQ1ROjYlhU8Hg8kuf5Z3OPlTDPc06nkxEh3/eNxIq7P6ehEKjrmqIoZlBKURTFI1OPCRRFwfF4JIoio3qfJfYRASk8eZ6jlEIpxel0+nL38KQaKqUIwxDf9825i3E5js/lWLRfXC74rftAVVW8v7+bAnO9XtFaU9e1KbnTaigE2ralKApOpxOHw4HD4fCwCEl7eiFRSuH7PpZlMQzDLBumNyIhIDVAAvnXr19ful7at3dCpRSO49D3PWVZmoCcqqZcSkVomqYxcdS27dP1F/zgx2RalETvp7I6vZbLPVDwXfsRgT/Z/vqf0T/i7ebjOik41QAAAABJRU5ErkJggg=="
            ></image>
          </g>
        </mask>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <path fill="#f2f2f2" d="M1 1h1365v767H1z"></path>
        <path d="M1365 1v766H1V1h1364m1-1H0v768h1366V0z"></path>
        <path
          fill="#c3984a"
          fillRule="evenodd"
          stroke="#5d3a26"
          strokeWidth="7.6"
          d="M884 324l36-18-34-22 32-25-37-15 26-30-39-8 19-35-40 1 13-38-40 8 5-40-37 16-3-40-33 22-11-38-28 28-18-36-22 34-24-32-15 38-31-27-7 40-35-20v40l-38-12 8 39-40-5 16 37-40 3 23 33-39 11 28 28-35 18 33 22-31 25 37 15-26 30 39 8-20 35 40-1-12 39 39-9-5 40 37-15 3 40 33-23 11 39 28-29 18 36 22-34 25 32 15-37 31 26 7-40 35 20v-40l38 13-8-40 39 5-15-37 40-3-23-33 39-11z"
        ></path>
        <path
          fill="#726f60"
          fillRule="evenodd"
          d="M744 220h138l-112 91 45 145-124-86-124 86 39-145-106-91h139l52-145zm-53 61l-162-50-1 1 90 75zm0 1L582 432l1 3 108-77zm0-1V104h-1l-43 122zm0 0l163-51v-1H734zm0 0l107 150h1l-41-129z"
          opacity="0.5"
        ></path>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M562 138h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M562 138h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#i)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M562 138h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M562 138h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M506 270h-13l-7 11 7 11h13l6-11-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M506 270h-13l-7 11 7 11h13l6-11-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#j)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M506 270h-13l-7 11 7 11h13l6-11-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M506 270h-13l-7 11 7 11h13l6-11-6-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M700 93h-13l-7 11 7 12h13l7-12-7-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M700 93h-13l-7 11 7 12h13l7-12-7-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#k)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M700 93h-13l-7 11 7 12h13l7-12-7-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M700 93h-13l-7 11 7 12h13l7-12-7-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M697 458h-13l-7 11 7 11h13l6-11-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M697 458h-13l-7 11 7 11h13l6-11-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#l)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M697 458h-13l-7 11 7 11h13l6-11-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M697 458h-13l-7 11 7 11h13l6-11-6-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M860 270h-13l-7 11 7 11h13l6-11-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M860 270h-13l-7 11 7 11h13l6-11-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#m)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M860 270h-13l-7 11 7 11h13l6-11-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M860 270h-13l-7 11 7 11h13l6-11-6-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M562 412h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M562 412h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#n)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M562 412h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M562 412h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M804 138h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M804 138h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#o)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M804 138h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M804 138h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
        </g>
        <path
          fill="#740073"
          fillRule="evenodd"
          d="M804 412h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <path
          fill="none"
          stroke="#333"
          strokeMiterlimit="10"
          strokeWidth="0.4"
          d="M804 412h-13l-7 11 7 12h13l6-12-6-11z"
        ></path>
        <g opacity="0.5" style={{ mixBlendMode: "hard-light" }} mask="url(#p)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M804 412h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.4"
            d="M804 412h-13l-7 11 7 12h13l6-12-6-11z"
          ></path>
        </g>
        <g
          fill="#f2f2f2"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.2"
        >
          <path d="M564 224l1-15 1-21v-24h32a70 70 0 018 0 20 20 0 015 2 13 13 0 014 2 13 13 0 013 4 16 16 0 011 6 18 18 0 01-1 5 14 14 0 01-2 4 13 13 0 01-2 3 14 14 0 01-3 2 26 26 0 01-4 1 22 22 0 014 1 13 13 0 013 2 12 12 0 013 3 13 13 0 012 4 16 16 0 010 5 18 18 0 01-1 6 15 15 0 01-3 5 14 14 0 01-4 3 21 21 0 01-6 2 78 78 0 01-8 0l-13 1h-12zm18-12h9a23 23 0 005 0 8 8 0 003-1 5 5 0 002-2 8 8 0 000-3 6 6 0 000-3 5 5 0 00-2-2 6 6 0 00-2-1 21 21 0 00-5 0h-9zm1-24h7l4-1a14 14 0 003 0 5 5 0 002-1 5 5 0 001-2 7 7 0 001-3 6 6 0 00-1-3 5 5 0 00-3-2 17 17 0 00-5 0h-8zm45 36l1-19 1-20 1-17v-4h49v13h-30l-1 10 12 1 14-1-1 14h-26v11h14l9-1h7l-1 14-23-1h-20zm73 0l3-47-19 1v-14h57v5l-1 5v4l-15-1h-3l-1 15-1 18v15l-10-1h-10zm36 0l4-6 23-43 2-5 3-6h23l7 19 13 35 2 6h-20l-6-17h-22l-8 17h-21zm35-30h13l-5-17-5 11zM532 379l3-47h-19v-5l1-8h56v13h-19l-1 14-1 19v14h-20zm44 0l2-19 1-21v-20h50v5l-1 5v3l-14-1h-9l-7 1v10h25l-1 13h-25l-1 11h24l7-1-1 14h-43zm60-1l-2-15a48 48 0 009 3 32 32 0 007 1 14 14 0 006-1 4 4 0 002-4 5 5 0 000-1 6 6 0 00-1-2 12 12 0 00-1-1l-9-8-4-3a27 27 0 01-4-5 14 14 0 01-1-4 15 15 0 01-1-4 15 15 0 011-5 16 16 0 018-9 22 22 0 017-2 45 45 0 017-1 85 85 0 0116 2l1 6v9a41 41 0 00-7-3 32 32 0 00-6 0 12 12 0 00-6 1l-2 3a4 4 0 000 2 8 8 0 002 2 23 23 0 002 2l5 4 4 3 3 3a31 31 0 012 3 18 18 0 012 3 13 13 0 011 2 13 13 0 011 3 16 16 0 01-8 14 23 23 0 01-7 3 41 41 0 01-9 1 100 100 0 01-18-2zm64 1q2-22 2-47h-18v-13h57l-1 4v9h-19l-1 14v19l-1 14h-19zm44 0l1-19 1-21 1-17v-3h49v13l-15-1h-8l-7 1-1 10h25v13h-26v11h23l7-1-1 14h-43zm59 0l2-14 1-15v-31h9l9-1h10a101 101 0 0110 1 24 24 0 016 1 17 17 0 014 2 15 15 0 014 3 13 13 0 012 4 17 17 0 010 5 20 20 0 01-1 6 16 16 0 01-2 5 16 16 0 01-4 4 36 36 0 01-7 3l2 6 3 5 5 13 2 3h-20a833 833 0 01-7-21l-5-13a25 25 0 005 0 17 17 0 006-1 8 8 0 004-3 8 8 0 001-4 6 6 0 00-1-3 6 6 0 00-3-2 24 24 0 00-7-1h-7l-1 22-1 26h-19z"></path>
        </g>
      </g>
    </svg>
      </>
    );
  }
}

export default Icon;