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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.492 11.082a.303.303 0 0 1-.02.111l-.498 1.302c-.393 1.026-1.515 1.866-2.551 1.914l-8.735.111a.23.23 0 0 0-.201.154.177.177 0 0 0 .019.156c.03.043.078.069.136.073l8.655.11c.457.022.833.208 1.059.524.246.343.3.81.154 1.315l-.123.425a.21.21 0 0 1-.197.151h-.005l-15.98-.004a.17.17 0 0 1-.167-.146 3.64 3.64 0 0 1 3.494-4.163A2.565 2.565 0 0 1 5.75 9.934a2.551 2.551 0 0 1 1.797.497 5.69 5.69 0 0 1 10.938.589c.005.02.007.041.007.062zM24 16.018c0 .444-.061.874-.176 1.281a.175.175 0 0 1-.17.127h-6.601a.103.103 0 0 1-.091-.139l.139-.362c.393-1.026 1.515-1.866 2.556-1.914l1.917-.111a.23.23 0 0 0 .201-.154.18.18 0 0 0-.019-.157.17.17 0 0 0-.132-.071l-1.845-.111c-.457-.022-.833-.207-1.059-.524-.246-.343-.3-.81-.154-1.315l.34-1.176a.14.14 0 0 1 .125-.1A4.733 4.733 0 0 1 24 16.018z"/></svg>
  