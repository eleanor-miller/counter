import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  SlCard,
  SlButton,
  SlInput,
  SlTextarea,
  SlSelect,
  SlMenuItem,
} from "@shoelace-style/shoelace/dist/react";

function handleSubmit(event) {
  event.preventDefault();
}

function Project() {
  return (
    <>
      <Header />
      <SlCard className="card-project">
        <form className="form-project" onSubmit={handleSubmit}>
          <SlInput
            type="text"
            label="Project Name"
            placeholder="Winter Buff Raglan Sweater"
            required
          />
          <br />
          <SlInput type="date" label="Start Date" placeholder="Date" required />
          <br />
          <SlInput type="date" label="Completed Date" placeholder="Date" />
          <br />
          <SlInput
            type="url"
            label="Pattern URL"
            placeholder="https://example.com/"
          />
          <br />
          <SlInput
            type="text"
            label="Yarn Brand(s)"
            placeholder="Lion Brand Yarns"
          />
          <br />
          <SlSelect
            label="Yarn Weight(s)"
            placeholder="Select Multiple"
            multiple
            clearable
          >
            <SlMenuItem value="option-1">0 Lace</SlMenuItem>
            <SlMenuItem value="option-2">1 Super Fine</SlMenuItem>
            <SlMenuItem value="option-3">2 Fine</SlMenuItem>
            <SlMenuItem value="option-4">3 Light</SlMenuItem>
            <SlMenuItem value="option-5">4 Medium</SlMenuItem>
            <SlMenuItem value="option-6">5 Bulky</SlMenuItem>
            <SlMenuItem value="option-7">6 Super Bulky</SlMenuItem>
            <SlMenuItem value="option-8">7 Jumbo</SlMenuItem>
          </SlSelect>
          <br />
          <SlInput
            type="text"
            label="Colorway(s)"
            placeholder="Fisherman, Black"
          />
          <br />
          <SlInput type="text" label="Dye Lot(s)" placeholder="01234, 56478" />
          <br />
          <SlTextarea label="Notes" resize="none" />
          <br />
          <input type="file" />
          <SlButton className="orange" type="submit">
            Submit
          </SlButton>
        </form>
      </SlCard>
      <Footer />
    </>
  );
}

export default Project;
