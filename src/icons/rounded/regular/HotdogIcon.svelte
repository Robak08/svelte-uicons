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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.044 12.9c3.077-3.35-1.8-8.01-5.046-4.851-2.533 2.553-9.457 2.541-11.982.015-4.236-3.652-8.827 2.888-3.811 5.9a4.426 4.426 0 0 0-.949 4.536C2.434 21.775 7.683 22.9 12 23c4.328-.107 9.553-1.218 10.744-4.5a4.428 4.428 0 0 0-.949-4.53 9.828 9.828 0 0 0 1.249-1.07Zm-2.186 4.927a2.489 2.489 0 0 1-1.278 1.424A16.307 16.307 0 0 1 12 21c-3.693-.071-10.371-1.25-8.755-5.079a2.506 2.506 0 0 1 3.335-1.176A11.36 11.36 0 0 0 12 16a11.36 11.36 0 0 0 5.42-1.255 2.516 2.516 0 0 1 3.438 3.086Zm.731-6.3a9.377 9.377 0 0 1-1.578 1.234C16.962 11.714 15.56 14.24 12 14c-3.557.241-4.966-2.286-8.012-1.234a9.347 9.347 0 0 1-1.578-1.235A1.492 1.492 0 0 1 2 10.458a1.51 1.51 0 0 1 2.594-.984c3.43 3.416 11.62 3.224 14.819-.007a1.5 1.5 0 0 1 2.176 2.065ZM11 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0Zm4-1V2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-8-.011V2a1 1 0 0 1 2 0v1.989a1 1 0 0 1-2 0Z"/></svg>
  