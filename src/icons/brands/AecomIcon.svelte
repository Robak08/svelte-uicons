<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M510.08 200.19 512 311.59 484.67 311.59 485.1 246.29 452.46 311.59 438.38 311.59 426.62 246.29 407.64 311.59 380.1 311.59 414.68 200.19 439.66 200.19 452.67 262.93 484.89 200.19z"/><path d="M343.4 198.27c29.89 2.14 48.24 26.48 44.82 58.69-3.41 33.51-30.31 58.26-60.82 56.13-29.89-2.14-48.23-26.48-44.82-58.69 3.41-33.51 30.51-58.26 60.82-56.13zm18.35 61.46c4.05-18.77-2.99-33.51-17.28-36.5-15.57-3.2-29.89 8.75-34.16 28.61-4.05 18.77 2.99 33.51 17.28 36.5 15.6 3.2 29.89-8.75 34.16-28.61zM288.11 207.21l-5.34 26.69c-6.76-5.97-15.51-9.26-24.53-9.17-19.43 0-33.73 13.67-34.37 32.44-.42 17.94 11.12 29.89 28.82 29.89 5.55 0 16.64-.64 24.11-4.05l-4.29 26.86c-7.46 3.41-19.2 4.05-24.74 4.05-31.39 0-52.51-22.83-51.44-55.49 1.28-33.7 27.73-60.39 59.76-60.39a57.748 57.748 0 0 1 32.02 9.17z"/><path d="M203.39 200.19 199.55 226.03 121.22 226.03 125.06 200.19z"/><path d="M190.59 285.57 186.75 311.62 108.42 311.62 112.26 285.57z"/><path d="M187.58 243.07 183.55 268.91 114.82 268.91 118.66 243.07z"/><path d="m82.6 200.19 25.62 111.4H81.75l-4.48-21.76H37.14l-9.17 21.76H0l52.5-111.4h30.1zM71.91 265.3l-8.1-38.63h-.22L47.38 265.3h24.53z"/></svg>
  