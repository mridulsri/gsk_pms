import Vue from "vue";
import httpClient from "../utils/httpClient";

Vue.prototype.$http = httpClient;
