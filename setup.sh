#!/usr/bin/env bash
set -euo pipefail

log_err() { printf '\033[31m[init]\033[0m %s\n' "$*" >&2; }
log_info() { printf '\033[32m[init]\033[0m %s\n' "$*"; }

if ! command -v node >/dev/null 2>&1; then
  log_err "Node.js is not installed."
  log_err "Please install Node.js manually: https://nodejs.org/"
  log_err "Stopping."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  log_err "npm is not installed."
  log_err "Please install npm manually (usually bundled with Node.js): https://nodejs.org/"
  log_err "Stopping."
  exit 1
fi

log_info "Node version: $(node --version)"
log_info "npm version: $(npm --version)"

log_info "Installing tsx..."
npm install --save-dev tsx

log_info "Installing project dependencies (npm install)..."
npm install

log_info "Done."
