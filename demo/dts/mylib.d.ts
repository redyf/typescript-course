// function add(a, b, ...args) {
export function add(a: number, b: number, ...numbers: number[]): number;

// function max(arr) {
export function max(arr: number[]): number | null;

// function setCase(message, kind) {
export type CaseKind = "uppercase" | "lowercase";
export function setCase(message: string, kind: CaseKind): string;

// function quote(message) {
export function quote(message: string): () => string;
