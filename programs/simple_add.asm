global main

section .text
	extern printf

main: mov eax, 14
	mov ebx, 10
	add eax, ebx
	
	push eax
	push message
	call printf
	add esp, 8
	ret
message db "value=%d",10,0        
