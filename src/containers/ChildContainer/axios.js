import axios from 'axios';
import React from 'react';

const instance = axios.create({
    baseURL:'API' //API cloud function URL
}) 